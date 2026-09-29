import{a as Dt,b as Br,e as Vr}from"./chunk-TEM7VC2V.js";import{a as Zr}from"./chunk-AS6MKOMI.js";import{a as jr}from"./chunk-2A5LY4Z2.js";import{a as pi,b as or,c as sr}from"./chunk-EDSXUEUY.js";import{a as bi,b as Hr,c as ce}from"./chunk-QQCPQXJK.js";import{a as Mr,b as Sr,c as Ir,e as zr}from"./chunk-HHRQE2DR.js";import{a as Ki}from"./chunk-R2KOWE3R.js";import{B as Nr,a as xt,c as Dr,d as vi,i as Fe,j as Pr,k as Rr,l as Ne,m as Or,n as Lr,r as Ar,t as ze,w as Fr}from"./chunk-NC6G5CSE.js";import{$ as Kt,$a as jt,$b as ir,A as In,Ac as hi,B as Dn,Bb as di,C as Pn,Ca as qn,Cc as gi,D as Rn,Dc as fi,E as On,Ea as ht,Fa as it,Fb as Wn,Ga as nt,Gb as Pe,Gc as fr,Ha as pe,J as ri,Ja as Zt,Jb as Yn,Jc as _r,K as Xi,Ka as Ut,Kb as te,Kc as be,L as qe,La as N,Lc as St,M as Ln,Ma as d,Mb as qt,Mc as br,Na as m,Nb as Yi,Nc as vr,O as An,Oa as X,Oc as yr,P as ke,Pa as he,Pc as _i,Qa as Te,Qc as xr,R as zt,Ra as Ge,Rb as Qn,Sc as It,T as u,Tb as Re,Tc as Ae,U as st,Ub as Kn,V as ct,Va as bt,Vb as $n,W as ai,Wa as Xn,Wb as ui,X as Fn,Xa as q,Xb as Jn,Y as we,Ya as Gn,Yb as tr,Z as Xe,Za as O,_a as Me,_b as er,a as qi,aa as $t,ab as Se,ac as Xt,b as wn,bb as li,bc as Mt,ca as Nn,cb as Et,cc as nr,cd as kr,d as ye,da as Ee,db as Ct,dc as rr,e as En,ea as zn,ec as Oe,fa as Bn,fc as ar,g as oe,ga as oi,ha as wt,hb as Tt,hc as Le,ia as jn,ib as Gi,ic as cr,id as wr,jb as pt,jd as Er,ka as Ce,kb as mi,kc as lr,la as b,lb as h,lc as mr,ma as Hn,mb as dt,mc as dr,md as Cr,n as Ue,na as si,nb as yt,o as Cn,oc as ur,pa as se,pb as ge,pc as pr,pd as Tr,q as Tn,qa as Vn,qb as fe,ra as Zn,rb as _e,sa as ci,sb as Jt,sc as Qi,ta as Z,tb as We,ub as Ye,v as Mn,va as _t,vb as Wi,wc as hr,x as xe,xa as ue,xc as gr,y as Sn,ya as Bt,yb as Ie,za as Un,zb as De}from"./chunk-U7JWN7NT.js";var Ma=Object.defineProperty,Sa=Object.defineProperties,Ia=Object.getOwnPropertyDescriptors,Ur=Object.getOwnPropertySymbols,Da=Object.prototype.hasOwnProperty,Pa=Object.prototype.propertyIsEnumerable,tn=(i,r,t)=>r in i?Ma(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,qr=(i,r)=>{for(var t in r||(r={}))Da.call(r,t)&&tn(i,t,r[t]);if(Ur)for(var t of Ur(r))Pa.call(r,t)&&tn(i,t,r[t]);return i},Ra=(i,r)=>Sa(i,Ia(r)),L=(i,r,t)=>(tn(i,typeof r!="symbol"?r+"":r,t),t),Gt=globalThis;function Pt(i){return(Gt.__Zone_symbol_prefix||"__zone_symbol__")+i}function Oa(){let i=Gt.performance;function r(Y){i&&i.mark&&i.mark(Y)}function t(Y,c){i&&i.measure&&i.measure(Y,c)}r("Zone");let e=class en{constructor(c,s){L(this,"_parent"),L(this,"_name"),L(this,"_properties"),L(this,"_zoneDelegate"),this._parent=c,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new p(this,this._parent&&this._parent._zoneDelegate,s)}static assertZonePatched(){if(Gt.Promise!==R.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let c=en.current;for(;c.parent;)c=c.parent;return c}static get current(){return S.zone}static get currentTask(){return ft}static __load_patch(c,s,o=!1){if(R.hasOwnProperty(c)){let M=Gt[Pt("forceDuplicateZoneCheck")]===!0;if(!o&&M)throw Error("Already loaded patch: "+c)}else if(!Gt["__Zone_disable_"+c]){let M="Zone:"+c;r(M),R[c]=s(Gt,en,V),t(M,M)}}get parent(){return this._parent}get name(){return this._name}get(c){let s=this.getZoneWith(c);if(s)return s._properties[c]}getZoneWith(c){let s=this;for(;s;){if(s._properties.hasOwnProperty(c))return s;s=s._parent}return null}fork(c){if(!c)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,c)}wrap(c,s){if(typeof c!="function")throw new Error("Expecting function got: "+c);let o=this._zoneDelegate.intercept(this,c,s),M=this;return function(){return M.runGuarded(o,this,arguments,s)}}run(c,s,o,M){S={parent:S,zone:this};try{return this._zoneDelegate.invoke(this,c,s,o,M)}finally{S=S.parent}}runGuarded(c,s=null,o,M){S={parent:S,zone:this};try{try{return this._zoneDelegate.invoke(this,c,s,o,M)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{S=S.parent}}runTask(c,s,o){if(c.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(c.zone||mt).name+"; Execution: "+this.name+")");let M=c,{type:Q,data:{isPeriodic:U=!1,isRefreshable:Lt=!1}={}}=c;if(c.state===T&&(Q===F||Q===ot))return;let Yt=c.state!=G;Yt&&M._transitionTo(G,K);let Qt=ft;ft=M,S={parent:S,zone:this};try{Q==ot&&c.data&&!U&&!Lt&&(c.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,M,s,o)}catch(At){if(this._zoneDelegate.handleError(this,At))throw At}}finally{let At=c.state;if(At!==T&&At!==$)if(Q==F||U||Lt&&At===y)Yt&&M._transitionTo(K,G,y);else{let f=M._zoneDelegates;this._updateTaskCount(M,-1),Yt&&M._transitionTo(T,G,T),Lt&&(M._zoneDelegates=f)}S=S.parent,ft=Qt}}scheduleTask(c){if(c.zone&&c.zone!==this){let o=this;for(;o;){if(o===c.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);o=o.parent}}c._transitionTo(y,T);let s=[];c._zoneDelegates=s,c._zone=this;try{c=this._zoneDelegate.scheduleTask(this,c)}catch(o){throw c._transitionTo($,y,T),this._zoneDelegate.handleError(this,o),o}return c._zoneDelegates===s&&this._updateTaskCount(c,1),c.state==y&&c._transitionTo(K,y),c}scheduleMicroTask(c,s,o,M){return this.scheduleTask(new v(E,c,s,o,M,void 0))}scheduleMacroTask(c,s,o,M,Q){return this.scheduleTask(new v(ot,c,s,o,M,Q))}scheduleEventTask(c,s,o,M,Q){return this.scheduleTask(new v(F,c,s,o,M,Q))}cancelTask(c){if(c.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(c.zone||mt).name+"; Execution: "+this.name+")");if(!(c.state!==K&&c.state!==G)){c._transitionTo(rt,K,G);try{this._zoneDelegate.cancelTask(this,c)}catch(s){throw c._transitionTo($,rt),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(c,-1),c._transitionTo(T,rt),c.runCount=-1,c}}_updateTaskCount(c,s){let o=c._zoneDelegates;s==-1&&(c._zoneDelegates=null);for(let M=0;M<o.length;M++)o[M]._updateTaskCount(c.type,s)}};L(e,"__symbol__",Pt);let n=e,a={name:"",onHasTask:(Y,c,s,o)=>Y.hasTask(s,o),onScheduleTask:(Y,c,s,o)=>Y.scheduleTask(s,o),onInvokeTask:(Y,c,s,o,M,Q)=>Y.invokeTask(s,o,M,Q),onCancelTask:(Y,c,s,o)=>Y.cancelTask(s,o)};class p{constructor(c,s,o){L(this,"_zone"),L(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),L(this,"_parentDelegate"),L(this,"_forkDlgt"),L(this,"_forkZS"),L(this,"_forkCurrZone"),L(this,"_interceptDlgt"),L(this,"_interceptZS"),L(this,"_interceptCurrZone"),L(this,"_invokeDlgt"),L(this,"_invokeZS"),L(this,"_invokeCurrZone"),L(this,"_handleErrorDlgt"),L(this,"_handleErrorZS"),L(this,"_handleErrorCurrZone"),L(this,"_scheduleTaskDlgt"),L(this,"_scheduleTaskZS"),L(this,"_scheduleTaskCurrZone"),L(this,"_invokeTaskDlgt"),L(this,"_invokeTaskZS"),L(this,"_invokeTaskCurrZone"),L(this,"_cancelTaskDlgt"),L(this,"_cancelTaskZS"),L(this,"_cancelTaskCurrZone"),L(this,"_hasTaskDlgt"),L(this,"_hasTaskDlgtOwner"),L(this,"_hasTaskZS"),L(this,"_hasTaskCurrZone"),this._zone=c,this._parentDelegate=s,this._forkZS=o&&(o&&o.onFork?o:s._forkZS),this._forkDlgt=o&&(o.onFork?s:s._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:s._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:s._interceptZS),this._interceptDlgt=o&&(o.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:s._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:s._invokeZS),this._invokeDlgt=o&&(o.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:s._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:s._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:s._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:s._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:s._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:s._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:s._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:s._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let M=o&&o.onHasTask,Q=s&&s._hasTaskZS;(M||Q)&&(this._hasTaskZS=M?o:a,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(c,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,c,s):new n(c,s)}intercept(c,s,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,c,s,o):s}invoke(c,s,o,M,Q){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,c,s,o,M,Q):s.apply(o,M)}handleError(c,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,c,s):!0}scheduleTask(c,s){let o=s;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,c,s),o||(o=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==E)at(s);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(c,s,o,M){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,c,s,o,M):s.callback.apply(o,M)}cancelTask(c,s){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,c,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");o=s.cancelFn(s)}return o}hasTask(c,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,c,s)}catch(o){this.handleError(c,o)}}_updateTaskCount(c,s){let o=this._taskCounts,M=o[c],Q=o[c]=M+s;if(Q<0)throw new Error("More tasks executed then were scheduled.");if(M==0||Q==0){let U={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:c};this.hasTask(this._zone,U)}}}class v{constructor(c,s,o,M,Q,U){if(L(this,"type"),L(this,"source"),L(this,"invoke"),L(this,"callback"),L(this,"data"),L(this,"scheduleFn"),L(this,"cancelFn"),L(this,"_zone",null),L(this,"runCount",0),L(this,"_zoneDelegates",null),L(this,"_state","notScheduled"),this.type=c,this.source=s,this.data=M,this.scheduleFn=Q,this.cancelFn=U,!o)throw new Error("callback is not defined");this.callback=o;let Lt=this;c===F&&M&&M.useG?this.invoke=v.invokeTask:this.invoke=function(){return v.invokeTask.call(Gt,Lt,this,arguments)}}static invokeTask(c,s,o){c||(c=this),kt++;try{return c.runCount++,c.zone.runTask(c,s,o)}finally{kt==1&&vt(),kt--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(T,y)}_transitionTo(c,s,o){if(this._state===s||this._state===o)this._state=c,c==T&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${c}', expecting state '${s}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let w=Pt("setTimeout"),D=Pt("Promise"),x=Pt("then"),I=[],A=!1,H;function gt(Y){if(H||Gt[D]&&(H=Gt[D].resolve(0)),H){let c=H[x];c||(c=H.then),c.call(H,Y)}else Gt[w](Y,0)}function at(Y){kt===0&&I.length===0&&gt(vt),Y&&I.push(Y)}function vt(){if(!A){for(A=!0;I.length;){let Y=I;I=[];for(let c=0;c<Y.length;c++){let s=Y[c];try{s.zone.runTask(s,null,null)}catch(o){V.onUnhandledError(o)}}}V.microtaskDrainDone(),A=!1}}let mt={name:"NO ZONE"},T="notScheduled",y="scheduling",K="scheduled",G="running",rt="canceling",$="unknown",E="microTask",ot="macroTask",F="eventTask",R={},V={symbol:Pt,currentZoneFrame:()=>S,onUnhandledError:J,microtaskDrainDone:J,scheduleMicroTask:at,showUncaughtError:()=>!n[Pt("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:J,patchMethod:()=>J,bindArguments:()=>[],patchThen:()=>J,patchMacroTask:()=>J,patchEventPrototype:()=>J,getGlobalObjects:()=>{},ObjectDefineProperty:()=>J,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>J,wrapWithCurrentZone:()=>J,filterProperties:()=>[],attachOriginToPatched:()=>J,_redefineProperty:()=>J,patchCallbacks:()=>J,nativeScheduleMicroTask:gt},S={parent:null,zone:new n(null,null)},ft=null,kt=0;function J(){}return t("Zone","Zone"),n}function La(){var i;let r=globalThis,t=r[Pt("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(t||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=r.Zone)!=null||(r.Zone=Oa()),r.Zone}var Ke=Object.getOwnPropertyDescriptor,rn=Object.defineProperty,an=Object.getPrototypeOf,Aa=Object.create,Fa=Array.prototype.slice,on="addEventListener",sn="removeEventListener",$i=Pt(on),Ji=Pt(sn),ee="true",ie="false",$e=Pt("");function cn(i,r){return Zone.current.wrap(i,r)}function ln(i,r,t,e,n){return Zone.current.scheduleMacroTask(i,r,t,e,n)}var W=Pt,ki=typeof window<"u",wi=ki?window:void 0,ut=ki&&wi||globalThis,Na="removeAttribute";function mn(i,r){for(let t=i.length-1;t>=0;t--)typeof i[t]=="function"&&(i[t]=cn(i[t],r+"_"+t));return i}function za(i,r){let t=i.constructor.name;for(let e=0;e<r.length;e++){let n=r[e],a=i[n];if(a){let p=Ke(i,n);if(!Kr(p))continue;i[n]=(v=>{let w=function(){return v.apply(this,mn(arguments,t+"."+n))};return re(w,v),w})(a)}}}function Kr(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var $r=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ei=!("nw"in ut)&&typeof ut.process<"u"&&ut.process.toString()==="[object process]",dn=!Ei&&!$r&&!!(ki&&wi.HTMLElement),Jr=typeof ut.process<"u"&&ut.process.toString()==="[object process]"&&!$r&&!!(ki&&wi.HTMLElement),xi={},Ba=W("enable_beforeunload"),Xr=function(i){if(i=i||ut.event,!i)return;let r=xi[i.type];r||(r=xi[i.type]=W("ON_PROPERTY"+i.type));let t=this||i.target||ut,e=t[r],n;if(dn&&t===wi&&i.type==="error"){let a=i;n=e&&e.call(this,a.message,a.filename,a.lineno,a.colno,a.error),n===!0&&i.preventDefault()}else n=e&&e.apply(this,arguments),i.type==="beforeunload"&&ut[Ba]&&typeof n=="string"?i.returnValue=n:n!=null&&!n&&i.preventDefault();return n};function Gr(i,r,t){let e=Ke(i,r);if(!e&&t&&Ke(t,r)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let n=W("on"+r+"patched");if(i.hasOwnProperty(n)&&i[n])return;delete e.writable,delete e.value;let a=e.get,p=e.set,v=r.slice(2),w=xi[v];w||(w=xi[v]=W("ON_PROPERTY"+v)),e.set=function(D){let x=this;if(!x&&i===ut&&(x=ut),!x)return;typeof x[w]=="function"&&x.removeEventListener(v,Xr),p?.call(x,null),x[w]=D,typeof D=="function"&&x.addEventListener(v,Xr,!1)},e.get=function(){let D=this;if(!D&&i===ut&&(D=ut),!D)return null;let x=D[w];if(x)return x;if(a){let I=a.call(this);if(I)return e.set.call(this,I),typeof D[Na]=="function"&&D.removeAttribute(r),I}return null},rn(i,r,e),i[n]=!0}function ta(i,r,t){if(r)for(let e=0;e<r.length;e++)Gr(i,"on"+r[e],t);else{let e=[];for(let n in i)n.slice(0,2)=="on"&&e.push(n);for(let n=0;n<e.length;n++)Gr(i,e[n],t)}}var Ht=W("originalInstance");function Qe(i){let r=ut[i];if(!r)return;ut[W(i)]=r,ut[i]=function(){let n=mn(arguments,i);switch(n.length){case 0:this[Ht]=new r;break;case 1:this[Ht]=new r(n[0]);break;case 2:this[Ht]=new r(n[0],n[1]);break;case 3:this[Ht]=new r(n[0],n[1],n[2]);break;case 4:this[Ht]=new r(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},re(ut[i],r);let t=new r(function(){}),e;for(e in t)i==="XMLHttpRequest"&&e==="responseBlob"||(function(n){typeof t[n]=="function"?ut[i].prototype[n]=function(){return this[Ht][n].apply(this[Ht],arguments)}:rn(ut[i].prototype,n,{set:function(a){typeof a=="function"?(this[Ht][n]=cn(a,i+"."+n),re(this[Ht][n],a)):this[Ht][n]=a},get:function(){return this[Ht][n]}})})(e);for(e in r)e!=="prototype"&&r.hasOwnProperty(e)&&(ut[i][e]=r[e])}function ja(i,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(r,e,{get:function(){return i[e]},set:function(a){n&&(!n.writable||typeof n.set!="function")||(i[e]=a)},enumerable:n?n.enumerable:!0,configurable:n?n.configurable:!0})})}var Ha=!1;function ne(i,r,t){let e=i;for(;e&&!e.hasOwnProperty(r);)e=an(e);!e&&i[r]&&(e=i);let n=W(r),a=null;if(e&&(!(a=e[n])||!e.hasOwnProperty(n))){a=e[n]=e[r];let p=e&&Ke(e,r);if(Kr(p)){let v=t(a,n,r);e[r]=function(){return v(this,arguments)},re(e[r],a),Ha&&ja(a,e[r])}}return a}function Va(i,r,t){let e=null;function n(a){let p=a.data;return p.args[p.cbIdx]=function(){a.invoke.apply(this,arguments)},e.apply(p.target,p.args),a}e=ne(i,r,a=>function(p,v){let w=t(p,v);return w.cbIdx>=0&&typeof v[w.cbIdx]=="function"?ln(w.name,v[w.cbIdx],w,n):a.apply(p,v)})}function re(i,r){i[W("OriginalDelegate")]=r}function Wr(i){return typeof i=="function"}function Yr(i){return typeof i=="number"}var Za={useG:!0},Rt={},ea={},ia=new RegExp("^"+$e+"(\\w+)(true|false)$"),na=W("propagationStopped");function ra(i,r){let t=(r?r(i):i)+ie,e=(r?r(i):i)+ee,n=$e+t,a=$e+e;Rt[i]={},Rt[i][ie]=n,Rt[i][ee]=a}function Ua(i,r,t,e){let n=e&&e.add||on,a=e&&e.rm||sn,p=e&&e.listeners||"eventListeners",v=e&&e.rmAll||"removeAllListeners",w=W(n),D="."+n+":",x="prependListener",I="."+x+":",A=function(T,y,K){if(T.isRemoved)return;let G=T.callback;typeof G=="object"&&G.handleEvent&&(T.callback=E=>G.handleEvent(E),T.originalDelegate=G);let rt;try{T.invoke(T,y,[K])}catch(E){rt=E}let $=T.options;if($&&typeof $=="object"&&$.once){let E=T.originalDelegate?T.originalDelegate:T.callback;y[a].call(y,K.type,E,$)}return rt};function H(T,y,K){if(y=y||i.event,!y)return;let G=T||y.target||i,rt=G[Rt[y.type][K?ee:ie]];if(rt){let $=[];if(rt.length===1){let E=A(rt[0],G,y);E&&$.push(E)}else{let E=rt.slice();for(let ot=0;ot<E.length&&!(y&&y[na]===!0);ot++){let F=A(E[ot],G,y);F&&$.push(F)}}if($.length===1)throw $[0];for(let E=0;E<$.length;E++){let ot=$[E];r.nativeScheduleMicroTask(()=>{throw ot})}}}let gt=function(T){return H(this,T,!1)},at=function(T){return H(this,T,!0)};function vt(T,y){if(!T)return!1;let K=!0;y&&y.useG!==void 0&&(K=y.useG);let G=y&&y.vh,rt=!0;y&&y.chkDup!==void 0&&(rt=y.chkDup);let $=!1;y&&y.rt!==void 0&&($=y.rt);let E=T;for(;E&&!E.hasOwnProperty(n);)E=an(E);if(!E&&T[n]&&(E=T),!E||E[w])return!1;let ot=y&&y.eventNameToString,F={},R=E[w]=E[n],V=E[W(a)]=E[a],S=E[W(p)]=E[p],ft=E[W(v)]=E[v],kt;y&&y.prepend&&(kt=E[W(y.prepend)]=E[y.prepend]);function J(l,_){return _?typeof l=="boolean"?{capture:l,passive:!0}:l?typeof l=="object"&&l.passive!==!1?Ra(qr({},l),{passive:!0}):l:{passive:!0}:l}let Y=function(l){if(!F.isExisting)return R.call(F.target,F.eventName,F.capture?at:gt,F.options)},c=function(l){if(!l.isRemoved){let _=Rt[l.eventName],C;_&&(C=_[l.capture?ee:ie]);let P=C&&l.target[C];if(P){for(let k=0;k<P.length;k++)if(P[k]===l){P.splice(k,1),l.isRemoved=!0,l.removeAbortListener&&(l.removeAbortListener(),l.removeAbortListener=null),P.length===0&&(l.allRemoved=!0,l.target[C]=null);break}}}if(l.allRemoved)return V.call(l.target,l.eventName,l.capture?at:gt,l.options)},s=function(l){return R.call(F.target,F.eventName,l.invoke,F.options)},o=function(l){return kt.call(F.target,F.eventName,l.invoke,F.options)},M=function(l){return V.call(l.target,l.eventName,l.invoke,l.options)},Q=K?Y:s,U=K?c:M,Lt=function(l,_){let C=typeof _;return C==="function"&&l.callback===_||C==="object"&&l.originalDelegate===_},Yt=y?.diff||Lt,Qt=Zone[W("UNPATCHED_EVENTS")],At=i[W("PASSIVE_EVENTS")];function f(l){if(typeof l=="object"&&l!==null){let _=qr({},l);return l.signal&&(_.signal=l.signal),_}return l}let g=function(l,_,C,P,k=!1,z=!1){return function(){let B=this||i,j=arguments[0];y&&y.transferEventName&&(j=y.transferEventName(j));let tt=arguments[1];if(!tt)return l.apply(this,arguments);if(Ei&&j==="uncaughtException")return l.apply(this,arguments);let et=!1;if(typeof tt!="function"){if(!tt.handleEvent)return l.apply(this,arguments);et=!0}if(G&&!G(l,tt,B,arguments))return;let ae=!!At&&At.indexOf(j)!==-1,Ft=f(J(arguments[2],ae)),de=Ft?.signal;if(de?.aborted)return;if(Qt){for(let Vt=0;Vt<Qt.length;Vt++)if(j===Qt[Vt])return ae?l.call(B,j,tt,Ft):l.apply(this,arguments)}let Zi=Ft?typeof Ft=="boolean"?!0:Ft.capture:!1,bn=Ft&&typeof Ft=="object"?Ft.once:!1,Ta=Zone.current,Ui=Rt[j];Ui||(ra(j,ot),Ui=Rt[j]);let vn=Ui[Zi?ee:ie],ve=B[vn],yn=!1;if(ve){if(yn=!0,rt){for(let Vt=0;Vt<ve.length;Vt++)if(Yt(ve[Vt],tt))return}}else ve=B[vn]=[];let ni,xn=B.constructor.name,kn=ea[xn];kn&&(ni=kn[j]),ni||(ni=xn+_+(ot?ot(j):j)),F.options=Ft,bn&&(F.options.once=!1),F.target=B,F.capture=Zi,F.eventName=j,F.isExisting=yn;let Ze=K?Za:void 0;Ze&&(Ze.taskData=F),de&&(F.options.signal=void 0);let Nt=Ta.scheduleEventTask(ni,tt,Ze,C,P);if(de){F.options.signal=de;let Vt=()=>Nt.zone.cancelTask(Nt);l.call(de,"abort",Vt,{once:!0}),Nt.removeAbortListener=()=>de.removeEventListener("abort",Vt)}if(F.target=null,Ze&&(Ze.taskData=null),bn&&(F.options.once=!0),typeof Nt.options!="boolean"&&(Nt.options=Ft),Nt.target=B,Nt.capture=Zi,Nt.eventName=j,et&&(Nt.originalDelegate=tt),z?ve.unshift(Nt):ve.push(Nt),k)return B}};return E[n]=g(R,D,Q,U,$),kt&&(E[x]=g(kt,I,o,U,$,!0)),E[a]=function(){let l=this||i,_=arguments[0];y&&y.transferEventName&&(_=y.transferEventName(_));let C=arguments[2],P=C?typeof C=="boolean"?!0:C.capture:!1,k=arguments[1];if(!k)return V.apply(this,arguments);if(G&&!G(V,k,l,arguments))return;let z=Rt[_],B;z&&(B=z[P?ee:ie]);let j=B&&l[B];if(j)for(let tt=0;tt<j.length;tt++){let et=j[tt];if(Yt(et,k)){if(j.splice(tt,1),et.isRemoved=!0,j.length===0&&(et.allRemoved=!0,l[B]=null,!P&&typeof _=="string")){let ae=$e+"ON_PROPERTY"+_;l[ae]=null}return et.zone.cancelTask(et),$?l:void 0}}return V.apply(this,arguments)},E[p]=function(){let l=this||i,_=arguments[0];y&&y.transferEventName&&(_=y.transferEventName(_));let C=[],P=aa(l,ot?ot(_):_);for(let k=0;k<P.length;k++){let z=P[k],B=z.originalDelegate?z.originalDelegate:z.callback;C.push(B)}return C},E[v]=function(){let l=this||i,_=arguments[0];if(_){y&&y.transferEventName&&(_=y.transferEventName(_));let C=Rt[_];if(C){let P=C[ie],k=C[ee],z=l[P],B=l[k];if(z){let j=z.slice();for(let tt=0;tt<j.length;tt++){let et=j[tt],ae=et.originalDelegate?et.originalDelegate:et.callback;this[a].call(this,_,ae,et.options)}}if(B){let j=B.slice();for(let tt=0;tt<j.length;tt++){let et=j[tt],ae=et.originalDelegate?et.originalDelegate:et.callback;this[a].call(this,_,ae,et.options)}}}}else{let C=Object.keys(l);for(let P=0;P<C.length;P++){let k=C[P],z=ia.exec(k),B=z&&z[1];B&&B!=="removeListener"&&this[v].call(this,B)}this[v].call(this,"removeListener")}if($)return this},re(E[n],R),re(E[a],V),ft&&re(E[v],ft),S&&re(E[p],S),!0}let mt=[];for(let T=0;T<t.length;T++)mt[T]=vt(t[T],e);return mt}function aa(i,r){if(!r){let a=[];for(let p in i){let v=ia.exec(p),w=v&&v[1];if(w&&(!r||w===r)){let D=i[p];if(D)for(let x=0;x<D.length;x++)a.push(D[x])}}return a}let t=Rt[r];t||(ra(r),t=Rt[r]);let e=i[t[ie]],n=i[t[ee]];return e?n?e.concat(n):e.slice():n?n.slice():[]}function qa(i,r){let t=i.Event;t&&t.prototype&&r.patchMethod(t.prototype,"stopImmediatePropagation",e=>function(n,a){n[na]=!0,e&&e.apply(n,a)})}function Xa(i,r){r.patchMethod(i,"queueMicrotask",t=>function(e,n){Zone.current.scheduleMicroTask("queueMicrotask",n[0])})}var yi=W("zoneTask");function Be(i,r,t,e){let n=null,a=null;r+=e,t+=e;let p={};function v(D){let x=D.data;x.args[0]=function(){return D.invoke.apply(this,arguments)};let I=n.apply(i,x.args);return Yr(I)?x.handleId=I:(x.handle=I,x.isRefreshable=Wr(I.refresh)),D}function w(D){let{handle:x,handleId:I}=D.data;return a.call(i,x??I)}n=ne(i,r,D=>function(x,I){var A;if(Wr(I[0])){let H={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?I[1]||0:void 0,args:I},gt=I[0];I[0]=function(){try{return gt.apply(this,arguments)}finally{let{handle:G,handleId:rt,isPeriodic:$,isRefreshable:E}=H;!$&&!E&&(rt?delete p[rt]:G&&(G[yi]=null))}};let at=ln(r,I[0],H,v,w);if(!at)return at;let{handleId:vt,handle:mt,isRefreshable:T,isPeriodic:y}=at.data;if(vt)p[vt]=at;else if(mt&&(mt[yi]=at,T&&!y)){let K=mt.refresh;mt.refresh=function(){let{zone:G,state:rt}=at;return rt==="notScheduled"?(at._state="scheduled",G._updateTaskCount(at,1)):rt==="running"&&(at._state="scheduling"),K.call(this)}}return(A=mt??vt)!=null?A:at}else return D.apply(i,I)}),a=ne(i,t,D=>function(x,I){let A=I[0],H;Yr(A)?(H=p[A],delete p[A]):(H=A?.[yi],H?A[yi]=null:H=A),H?.type?H.cancelFn&&H.zone.cancelTask(H):D.apply(i,I)})}function Ga(i,r){let{isBrowser:t,isMix:e}=r.getGlobalObjects();if(!t&&!e||!i.customElements||!("customElements"in i))return;let n=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,i.customElements,"customElements","define",n)}function Wa(i,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:e,TRUE_STR:n,FALSE_STR:a,ZONE_SYMBOL_PREFIX:p}=r.getGlobalObjects();for(let w=0;w<t.length;w++){let D=t[w],x=D+a,I=D+n,A=p+x,H=p+I;e[D]={},e[D][a]=A,e[D][n]=H}let v=i.EventTarget;if(!(!v||!v.prototype))return r.patchEventTarget(i,r,[v&&v.prototype]),!0}function Ya(i,r){r.patchEventPrototype(i,r)}function oa(i,r,t){if(!t||t.length===0)return r;let e=t.filter(a=>a.target===i);if(e.length===0)return r;let n=e[0].ignoreProperties;return r.filter(a=>n.indexOf(a)===-1)}function Qr(i,r,t,e){if(!i)return;let n=oa(i,r,t);ta(i,n,e)}function nn(i){return Object.getOwnPropertyNames(i).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Qa(i,r){if(Ei&&!Jr||Zone[i.symbol("patchEvents")])return;let t=r.__Zone_ignore_on_properties,e=[];if(dn){let n=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),Qr(n,nn(n),t,an(n))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let n=0;n<e.length;n++){let a=r[e[n]];a?.prototype&&Qr(a.prototype,nn(a.prototype),t)}}function Ka(i){i.__load_patch("timers",r=>{let e="clear";Be(r,"set",e,"Timeout"),Be(r,"set",e,"Interval"),Be(r,"set",e,"Immediate")}),i.__load_patch("requestAnimationFrame",r=>{Be(r,"request","cancel","AnimationFrame"),Be(r,"mozRequest","mozCancel","AnimationFrame"),Be(r,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(r,t)=>{let e=["alert","prompt","confirm"];for(let n=0;n<e.length;n++){let a=e[n];ne(r,a,(p,v,w)=>function(D,x){return t.current.run(p,r,x,w)})}}),i.__load_patch("EventTarget",(r,t,e)=>{Ya(r,e),Wa(r,e);let n=r.XMLHttpRequestEventTarget;n&&n.prototype&&e.patchEventTarget(r,e,[n.prototype])}),i.__load_patch("MutationObserver",(r,t,e)=>{Qe("MutationObserver"),Qe("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(r,t,e)=>{Qe("IntersectionObserver")}),i.__load_patch("FileReader",(r,t,e)=>{Qe("FileReader")}),i.__load_patch("on_property",(r,t,e)=>{Qa(e,r)}),i.__load_patch("customElements",(r,t,e)=>{Ga(r,e)}),i.__load_patch("XHR",(r,t)=>{D(r);let e=W("xhrTask"),n=W("xhrSync"),a=W("xhrListener"),p=W("xhrScheduled"),v=W("xhrURL"),w=W("xhrErrorBeforeScheduled");function D(x){let I=x.XMLHttpRequest;if(!I)return;let A=I.prototype;function H(R){return R[e]}let gt=A[$i],at=A[Ji];if(!gt){let R=x.XMLHttpRequestEventTarget;if(R){let V=R.prototype;gt=V[$i],at=V[Ji]}}let vt="readystatechange",mt="scheduled";function T(R){let V=R.data,S=V.target;S[p]=!1,S[w]=!1;let ft=S[a];gt||(gt=S[$i],at=S[Ji]),ft&&at.call(S,vt,ft);let kt=S[a]=()=>{if(S.readyState===S.DONE)if(!V.aborted&&S[p]&&R.state===mt){let Y=S[t.__symbol__("loadfalse")];if(S.status!==0&&Y&&Y.length>0){let c=R.invoke;R.invoke=function(){let s=S[t.__symbol__("loadfalse")];for(let o=0;o<s.length;o++)s[o]===R&&s.splice(o,1);!V.aborted&&R.state===mt&&c.call(R)},Y.push(R)}else R.invoke()}else!V.aborted&&S[p]===!1&&(S[w]=!0)};return gt.call(S,vt,kt),S[e]||(S[e]=R),ot.apply(S,V.args),S[p]=!0,R}function y(){}function K(R){let V=R.data;return V.aborted=!0,F.apply(V.target,V.args)}let G=ne(A,"open",()=>function(R,V){return R[n]=V[2]==!1,R[v]=V[1],G.apply(R,V)}),rt="XMLHttpRequest.send",$=W("fetchTaskAborting"),E=W("fetchTaskScheduling"),ot=ne(A,"send",()=>function(R,V){if(t.current[E]===!0||R[n])return ot.apply(R,V);{let S={target:R,url:R[v],isPeriodic:!1,args:V,aborted:!1},ft=ln(rt,y,S,T,K);R&&R[w]===!0&&!S.aborted&&ft.state===mt&&ft.invoke()}}),F=ne(A,"abort",()=>function(R,V){let S=H(R);if(S&&typeof S.type=="string"){if(S.cancelFn==null||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(t.current[$]===!0)return F.apply(R,V)})}}),i.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&za(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(r,t)=>{function e(n){return function(a){aa(r,n).forEach(v=>{let w=r.PromiseRejectionEvent;if(w){let D=new w(n,{promise:a.promise,reason:a.rejection});v.invoke(D)}})}}r.PromiseRejectionEvent&&(t[W("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),t[W("rejectionHandledHandler")]=e("rejectionhandled"))}),i.__load_patch("queueMicrotask",(r,t,e)=>{Xa(r,e)})}function $a(i){i.__load_patch("ZoneAwarePromise",(r,t,e)=>{let n=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function p(f){if(f&&f.toString===Object.prototype.toString){let g=f.constructor&&f.constructor.name;return(g||"")+": "+JSON.stringify(f)}return f?f.toString():Object.prototype.toString.call(f)}let v=e.symbol,w=[],D=r[v("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,x=v("Promise"),I=v("then"),A="__creationTrace__";e.onUnhandledError=f=>{if(e.showUncaughtError()){let g=f&&f.rejection;g?console.error("Unhandled Promise rejection:",g instanceof Error?g.message:g,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",g,g instanceof Error?g.stack:void 0):console.error(f)}},e.microtaskDrainDone=()=>{for(;w.length;){let f=w.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(g){gt(g)}}};let H=v("unhandledPromiseRejectionHandler");function gt(f){e.onUnhandledError(f);try{let g=t[H];typeof g=="function"&&g.call(this,f)}catch{}}function at(f){return f&&typeof f.then=="function"}function vt(f){return f}function mt(f){return U.reject(f)}let T=v("state"),y=v("value"),K=v("finally"),G=v("parentPromiseValue"),rt=v("parentPromiseState"),$="Promise.then",E=null,ot=!0,F=!1,R=0;function V(f,g){return l=>{try{J(f,g,l)}catch(_){J(f,!1,_)}}}let S=function(){let f=!1;return function(l){return function(){f||(f=!0,l.apply(null,arguments))}}},ft="Promise resolved with itself",kt=v("currentTaskTrace");function J(f,g,l){let _=S();if(f===l)throw new TypeError(ft);if(f[T]===E){let C=null;try{(typeof l=="object"||typeof l=="function")&&(C=l&&l.then)}catch(P){return _(()=>{J(f,!1,P)})(),f}if(g!==F&&l instanceof U&&l.hasOwnProperty(T)&&l.hasOwnProperty(y)&&l[T]!==E)c(l),J(f,l[T],l[y]);else if(g!==F&&typeof C=="function")try{C.call(l,_(V(f,g)),_(V(f,!1)))}catch(P){_(()=>{J(f,!1,P)})()}else{f[T]=g;let P=f[y];if(f[y]=l,f[K]===K&&g===ot&&(f[T]=f[rt],f[y]=f[G]),g===F&&l instanceof Error){let k=t.currentTask&&t.currentTask.data&&t.currentTask.data[A];k&&a(l,kt,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<P.length;)s(f,P[k++],P[k++],P[k++],P[k++]);if(P.length==0&&g==F){f[T]=R;let k=l;try{throw new Error("Uncaught (in promise): "+p(l)+(l&&l.stack?`
`+l.stack:""))}catch(z){k=z}D&&(k.throwOriginal=!0),k.rejection=l,k.promise=f,k.zone=t.current,k.task=t.currentTask,w.push(k),e.scheduleMicroTask()}}}return f}let Y=v("rejectionHandledHandler");function c(f){if(f[T]===R){try{let g=t[Y];g&&typeof g=="function"&&g.call(this,{rejection:f[y],promise:f})}catch{}f[T]=F;for(let g=0;g<w.length;g++)f===w[g].promise&&w.splice(g,1)}}function s(f,g,l,_,C){c(f);let P=f[T],k=P?typeof _=="function"?_:vt:typeof C=="function"?C:mt;g.scheduleMicroTask($,()=>{try{let z=f[y],B=!!l&&K===l[K];B&&(l[G]=z,l[rt]=P);let j=g.run(k,void 0,B&&k!==mt&&k!==vt?[]:[z]);J(l,!0,j)}catch(z){J(l,!1,z)}},l)}let o="function ZoneAwarePromise() { [native code] }",M=function(){},Q=r.AggregateError;class U{static toString(){return o}static resolve(g){return g instanceof U?g:J(new this(null),ot,g)}static reject(g){return J(new this(null),F,g)}static withResolvers(){let g={};return g.promise=new U((l,_)=>{g.resolve=l,g.reject=_}),g}static any(g){if(!g||typeof g[Symbol.iterator]!="function")return Promise.reject(new Q([],"All promises were rejected"));let l=[],_=0;try{for(let k of g)_++,l.push(U.resolve(k))}catch{return Promise.reject(new Q([],"All promises were rejected"))}if(_===0)return Promise.reject(new Q([],"All promises were rejected"));let C=!1,P=[];return new U((k,z)=>{for(let B=0;B<l.length;B++)l[B].then(j=>{C||(C=!0,k(j))},j=>{P.push(j),_--,_===0&&(C=!0,z(new Q(P,"All promises were rejected")))})})}static race(g){let l,_,C=new this((z,B)=>{l=z,_=B});function P(z){l(z)}function k(z){_(z)}for(let z of g)at(z)||(z=this.resolve(z)),z.then(P,k);return C}static all(g){return U.allWithCallback(g)}static allSettled(g){return(this&&this.prototype instanceof U?this:U).allWithCallback(g,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(g,l){let _,C,P=new this((j,tt)=>{_=j,C=tt}),k=2,z=0,B=[];for(let j of g){at(j)||(j=this.resolve(j));let tt=z;try{j.then(et=>{B[tt]=l?l.thenCallback(et):et,k--,k===0&&_(B)},et=>{l?(B[tt]=l.errorCallback(et),k--,k===0&&_(B)):C(et)})}catch(et){C(et)}k++,z++}return k-=2,k===0&&_(B),P}constructor(g){let l=this;if(!(l instanceof U))throw new Error("Must be an instanceof Promise.");l[T]=E,l[y]=[];try{let _=S();g&&g(_(V(l,ot)),_(V(l,F)))}catch(_){J(l,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return U}then(g,l){var _;let C=(_=this.constructor)==null?void 0:_[Symbol.species];(!C||typeof C!="function")&&(C=this.constructor||U);let P=new C(M),k=t.current;return this[T]==E?this[y].push(k,P,g,l):s(this,k,P,g,l),P}catch(g){return this.then(null,g)}finally(g){var l;let _=(l=this.constructor)==null?void 0:l[Symbol.species];(!_||typeof _!="function")&&(_=U);let C=new _(M);C[K]=K;let P=t.current;return this[T]==E?this[y].push(P,C,g,g):s(this,P,C,g,g),C}}U.resolve=U.resolve,U.reject=U.reject,U.race=U.race,U.all=U.all;let Lt=r[x]=r.Promise;r.Promise=U;let Yt=v("thenPatched");function Qt(f){let g=f.prototype,l=n(g,"then");if(l&&(l.writable===!1||!l.configurable))return;let _=g.then;g[I]=_,f.prototype.then=function(C,P){return new U((z,B)=>{_.call(this,z,B)}).then(C,P)},f[Yt]=!0}e.patchThen=Qt;function At(f){return function(g,l){let _=f.apply(g,l);if(_ instanceof U)return _;let C=_.constructor;return C[Yt]||Qt(C),_}}if(Lt){Qt(Lt);let f=Lt.try;f&&typeof f=="function"&&(U.try=f),ne(r,"fetch",g=>At(g))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=w,U})}function Ja(i){i.__load_patch("toString",r=>{let t=Function.prototype.toString,e=W("OriginalDelegate"),n=W("Promise"),a=W("Error"),p=function(){if(typeof this=="function"){let x=this[e];if(x)return typeof x=="function"?t.call(x):Object.prototype.toString.call(x);if(this===Promise){let I=r[n];if(I)return t.call(I)}if(this===Error){let I=r[a];if(I)return t.call(I)}}return t.call(this)};p[e]=t,Function.prototype.toString=p;let v=Object.prototype.toString,w="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?w:v.call(this)}})}function to(i,r,t,e,n){let a=Zone.__symbol__(e);if(r[a])return;let p=r[a]=r[e];r[e]=function(v,w,D){return w&&w.prototype&&n.forEach(function(x){let I=`${t}.${e}::`+x,A=w.prototype;try{if(A.hasOwnProperty(x)){let H=i.ObjectGetOwnPropertyDescriptor(A,x);H&&H.value?(H.value=i.wrapWithCurrentZone(H.value,I),i._redefineProperty(w.prototype,x,H)):A[x]&&(A[x]=i.wrapWithCurrentZone(A[x],I))}else A[x]&&(A[x]=i.wrapWithCurrentZone(A[x],I))}catch{}}),p.call(r,v,w,D)},i.attachOriginToPatched(r[e],p)}function eo(i){i.__load_patch("util",(r,t,e)=>{let n=nn(r);e.patchOnProperties=ta,e.patchMethod=ne,e.bindArguments=mn,e.patchMacroTask=Va;let a=t.__symbol__("BLACK_LISTED_EVENTS"),p=t.__symbol__("UNPATCHED_EVENTS");r[p]&&(r[a]=r[p]),r[a]&&(t[a]=t[p]=r[a]),e.patchEventPrototype=qa,e.patchEventTarget=Ua,e.ObjectDefineProperty=rn,e.ObjectGetOwnPropertyDescriptor=Ke,e.ObjectCreate=Aa,e.ArraySlice=Fa,e.patchClass=Qe,e.wrapWithCurrentZone=cn,e.filterProperties=oa,e.attachOriginToPatched=re,e._redefineProperty=Object.defineProperty,e.patchCallbacks=to,e.getGlobalObjects=()=>({globalSources:ea,zoneSymbolEventNames:Rt,eventNames:n,isBrowser:dn,isMix:Jr,isNode:Ei,TRUE_STR:ee,FALSE_STR:ie,ZONE_SYMBOL_PREFIX:$e,ADD_EVENT_LISTENER_STR:on,REMOVE_EVENT_LISTENER_STR:sn})})}function io(i){$a(i),Ja(i),eo(i)}var sa=La();io(sa);Ka(sa);var Ci=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-[1536px]","mx-auto","px-4"],[1,"flex","flex-col","items-center","py-10","justify-center","mt-16","rounded-2xl","shadow-xl","relative","sm:py-16","sm:mt-20"],["src","../images/hero1.jpg","alt","ski resort image",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-4","sm:p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-center","text-4xl","sm:text-6xl"],["routerLink","/shop",1,"bg-linear-to-r","from-blue-600","to-cyan-500","font-semibold","text-lg","sm:text-2xl","text-white","rounded-2xl","px-6","sm:px-8","py-3","sm:py-4","border-2","border-transparent","mt-8"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"div",1),X(2,"img",2),d(3,"div",3)(4,"h1",4),h(5," Welcome to SkiNet! "),m(),d(6,"button",5),h(7," Go shopping "),m()()()())},dependencies:[Mt],encapsulation:2})};var Wt=class i{baseUrl=Oe.apiUrl;http=u(ui);brands=[];types=[];getProducts(r){let t=new $n;return r.brands.length>0&&(t=t.append("brands",r.brands.join(","))),r.types.length>0&&(t=t.append("types",r.types.join(","))),r.sort&&(t=t.append("sort",r.sort)),r.search&&(t=t.append("search",r.search)),t=t.append("pageSize",r.pageSize),t=t.append("pageIndex",r.pageNumber),this.http.get(this.baseUrl+"products",{params:t})}getProduct(r){return this.http.get(this.baseUrl+"products/"+r)}getBrands(){if(!(this.brands.length>0))return this.http.get(this.baseUrl+"products/brands").subscribe({next:r=>this.brands=r,error:r=>console.log(r)})}getTypes(){if(!(this.types.length>0))return this.http.get(this.baseUrl+"products/types").subscribe({next:r=>this.types=r,error:r=>console.log(r)})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};function no(i,r){if(i&1){let t=bt();d(0,"mat-card",0),X(1,"img",1),d(2,"mat-card-content",2)(3,"h2",3),h(4),m(),d(5,"p",4),h(6),Ie(7,"currency"),m()(),d(8,"mat-card-actions",5),q("click",function(n){return n.stopPropagation()}),d(9,"button",6),q("click",function(){st(t);let n=O();return ct(n.cartService.addItemToCart(n.product))}),d(10,"mat-icon"),h(11,"add_shopping_cart"),m(),d(12,"span",7),h(13,"Add to cart"),m()()()()}if(i&2){let t=O();N("routerLink",We("/shop/",t.product.id)),b(),N("src",Jt(t.product.pictureUrl),Ce)("alt",Jt(t.product.name)),b(3),dt(t.product.name),b(2),dt(De(7,9,t.product.price)),b(3),ht("aria-label","Add "+t.product.name+" to cart")}}var Ti=class i{product;shopService=u(Wt);cartService=u(Dt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card","h-full!",3,"routerLink"],[1,"w-full","aspect-square","object-cover","rounded-t-lg","shrink-0",3,"src","alt"],[1,"mt-2","flex-1"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"],[1,"hidden","sm:inline"]],template:function(t,e){t&1&&it(0,no,14,11,"mat-card",0),t&2&&nt(e.product?0:-1)},dependencies:[pi,or,sr,xt,Ae,Mt,Re],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}@media(hover:hover){.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0000003b;cursor:pointer}}"]})};var je=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=St(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=St(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(ht("aria-orientation",n.vertical?"vertical":"horizontal"),pt("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})();var ao=["*"],oo=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,so=["unscopedContent"];var co=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],lo=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function mo(i,r){i&1&&jt(0,4)}function uo(i,r){if(i&1&&(d(0,"div",11),X(1,"input",12),d(2,"div",13),ai(),d(3,"svg",14),X(4,"path",15),m(),Fn(),X(5,"div",16),m()()),i&2){let t=O();pt("mdc-checkbox--disabled",t.disabled),b(),N("checked",t.selected)("disabled",t.disabled)}}function po(i,r){if(i&1&&(d(0,"div",17),X(1,"input",18),d(2,"div",19),X(3,"div",20)(4,"div",21),m()()),i&2){let t=O();pt("mdc-radio--disabled",t.disabled),b(),N("checked",t.selected)("disabled",t.disabled)}}function ho(i,r){}function go(i,r){if(i&1&&(d(0,"span",4),Bt(1,ho,0,0,"ng-template",6),m()),i&2){O();let t=Tt(3);b(),N("ngTemplateOutlet",t)}}function fo(i,r){}function _o(i,r){if(i&1&&(d(0,"span",5),Bt(1,fo,0,0,"ng-template",6),m()),i&2){O();let t=Tt(5);b(),N("ngTemplateOutlet",t)}}function bo(i,r){}function vo(i,r){if(i&1&&Bt(0,bo,0,0,"ng-template",6),i&2){O();let t=Tt(1);N("ngTemplateOutlet",t)}}function yo(i,r){}function xo(i,r){if(i&1&&(d(0,"span",9),Bt(1,yo,0,0,"ng-template",6),m()),i&2){O();let t=Tt(3);b(),N("ngTemplateOutlet",t)}}function ko(i,r){}function wo(i,r){if(i&1&&(d(0,"span",9),Bt(1,ko,0,0,"ng-template",6),m()),i&2){O();let t=Tt(5);b(),N("ngTemplateOutlet",t)}}function Eo(i,r){}function Co(i,r){if(i&1&&Bt(0,Eo,0,0,"ng-template",6),i&2){O();let t=Tt(1);N("ngTemplateOutlet",t)}}var la=new zt("ListOption"),To=(()=>{class i{_elementRef=u(wt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Mo=(()=>{class i{_elementRef=u(wt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var ma=(()=>{class i{_listOption=u(la,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,hostVars:4,hostBindings:function(e,n){e&2&&pt("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),So=(()=>{class i extends ma{static \u0275fac=(()=>{let t;return function(n){return(t||(t=oi(i)))(n||i)}})();static \u0275dir=_t({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ue]})}return i})(),Io=(()=>{class i extends ma{static \u0275fac=(()=>{let t;return function(n){return(t||(t=oi(i)))(n||i)}})();static \u0275dir=_t({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ue]})}return i})(),Do=new zt("MAT_LIST_CONFIG"),un=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=St(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(St(t))}_disabled=Ee(!1);_defaultOptions=u(Do,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,hostVars:1,hostBindings:function(e,n){e&2&&ht("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),ca=(()=>{class i{_elementRef=u(wt);_ngZone=u($t);_listBase=u(un,{optional:!0});_platform=u(ur);_hostElement;_isButtonElement;_noopAnimations=be();_avatars;_icons;set lines(t){this._explicitLines=pr(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=St(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(St(t))}_disabled=Ee(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Le).load(_i);let t=u(vr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new br(this,this._ngZone,this._hostElement,this._platform,u(we)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(xe(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,contentQueries:function(e,n,a){if(e&1&&Se(a,So,4)(a,Io,4),e&2){let p;Et(p=Ct())&&(n._avatars=p),Et(p=Ct())&&(n._icons=p)}},hostVars:4,hostBindings:function(e,n){e&2&&(ht("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),pt("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var da=new zt("SelectionList"),Je=(()=>{class i extends ca{_selectionList=u(da);_changeDetectorRef=u(te);_lines;_titles;_unscopedContent;selectedChange=new Kt;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(t){this.togglePosition=t}get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=St(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(n=>t.compareWith(this._value,n))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected("icons",t)||this._hasProjected("avatars",t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute("tabindex",t+"")}_hasBothLeadingAndTrailing(){let t=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),e=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return t&&e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=oi(i)))(n||i)}})();static \u0275cmp=Z({type:i,selectors:[["mat-list-option"]],contentQueries:function(e,n,a){if(e&1&&Se(a,Mo,5)(a,To,5),e&2){let p;Et(p=Ct())&&(n._lines=p),Et(p=Ct())&&(n._titles=p)}},viewQuery:function(e,n){if(e&1&&li(so,5),e&2){let a;Et(a=Ct())&&(n._unscopedContent=a.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(e,n){e&1&&q("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),e&2&&(ht("aria-selected",n.selected),pt("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[Ye([{provide:ca,useExisting:i},{provide:la,useExisting:i}]),ue],ngContentSelectors:lo,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(e,n){e&1&&(Me(co),Bt(0,mo,1,0,"ng-template",null,0,di)(2,uo,6,4,"ng-template",null,1,di)(4,po,5,4,"ng-template",null,2,di),it(6,go,2,1,"span",4)(7,_o,2,1,"span",5),it(8,vo,1,1,null,6),d(9,"span",7),jt(10),jt(11,1),d(12,"span",8,3),q("cdkObserveContent",function(){return n._updateItemLines(!0)}),jt(14,2),m()(),it(15,xo,2,1,"span",9)(16,wo,2,1,"span",9),it(17,Co,1,1,null,6),jt(18,3),X(19,"div",10)),e&2&&(b(6),nt(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),b(2),nt(n._hasIconsOrAvatarsAt("before")?8:-1),b(7),nt(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),b(2),nt(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[Qn,hr],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Po={provide:Dr,useExisting:An(()=>ti),multi:!0},pn=class{source;options;constructor(r,t){this.source=r,this.options=t}},ti=(()=>{class i extends un{_element=u(wt);_ngZone=u($t);_renderer=u(se);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new oe;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new Kt;color="accent";compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=St(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new Ki(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=St(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new Ki(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=u(te);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,n=t.disableRipple,a=t.hideSingleSelectionIndicator;(n&&!n.firstChange||e&&!e.firstChange||a&&!a.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new pn(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(St(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=Ee(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(qe(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let n=this.options.find(a=>a.selected?!1:this.compareWith(a.value,e));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let n=[];return this.options.forEach(a=>{(!e||!a.disabled)&&a._setSelected(t)&&n.push(a)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&hi(t,"ctrlKey","metaKey")){let n=this.options.some(a=>!a.disabled&&!a.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{if(this.disabled)return;let e=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new gi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(qe(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,n)=>e._setTabindex(n===t?0:-1)),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=dr();return t&&this._element.nativeElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["mat-selection-list"]],contentQueries:function(e,n,a){if(e&1&&Se(a,Je,5),e&2){let p;Et(p=Ct())&&(n._items=p)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(e,n){e&1&&q("keydown",function(p){return n._handleKeydown(p)}),e&2&&ht("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[Ye([Po,{provide:un,useExisting:i},{provide:da,useExisting:i}]),ue,Bn],ngContentSelectors:ao,decls:1,vars:0,template:function(e,n){e&1&&(Me(),jt(0))},styles:[oo],encapsulation:2,changeDetection:0})}return i})();function Ro(i,r){if(i&1&&(d(0,"mat-list-option",5),h(1),m()),i&2){let t=r.$implicit;N("value",t),b(),dt(t)}}function Oo(i,r){if(i&1&&(d(0,"mat-list-option",5),h(1),m()),i&2){let t=r.$implicit;N("value",t),b(),dt(t)}}var Ii=class i{shopService=u(Wt);dialogRef=u(Mr);data=u(Sr);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({brandsSelected:this.selectedBrands,typesSelected:this.selectedTypes})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-filters-dialog"]],decls:20,vars:4,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","flex-col","p-4","sm:flex-row"],[1,"w-full","sm:w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&(d(0,"div")(1,"h3",0),h(2,"Filters"),m(),X(3,"mat-divider"),d(4,"div",1)(5,"div",2)(6,"h4",3),h(7,"Brands"),m(),d(8,"mat-selection-list",4),_e("ngModelChange",function(a){return fe(e.selectedBrands,a)||(e.selectedBrands=a),a}),Zt(9,Ro,2,2,"mat-list-option",5,pe),m()(),d(11,"div",2)(12,"h4",3),h(13,"Types"),m(),d(14,"mat-selection-list",4),_e("ngModelChange",function(a){return fe(e.selectedTypes,a)||(e.selectedTypes=a),a}),Zt(15,Oo,2,2,"mat-list-option",5,pe),m()()(),d(17,"div",6)(18,"button",7),q("click",function(){return e.applyFilters()}),h(19,"Apply Filters"),m()()()),t&2&&(b(8),ge("ngModel",e.selectedBrands),N("multiple",!0),b(),Ut(e.shopService.brands),b(5),ge("ngModel",e.selectedTypes),N("multiple",!0),b(),Ut(e.shopService.types))},dependencies:[je,ti,Je,Ae,ze,Fe,Ne],encapsulation:2})};var No=["mat-menu-item",""],zo=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bo=["mat-icon, [matMenuItemIcon]","*"];function jo(i,r){i&1&&(ai(),d(0,"svg",2),X(1,"polygon",3),m())}var Ho=["*"];function Vo(i,r){if(i&1){let t=bt();he(0,"div",0),Gn("click",function(){st(t);let n=O();return ct(n.closed.emit("click"))})("animationstart",function(n){st(t);let a=O();return ct(a._onAnimationStart(n.animationName))})("animationend",function(n){st(t);let a=O();return ct(a._onAnimationDone(n.animationName))})("animationcancel",function(n){st(t);let a=O();return ct(a._onAnimationDone(n.animationName))}),he(1,"div",1),jt(2),Te()()}if(i&2){let t=O();mi(t._classList),pt("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Xn("id",t.panelId),ht("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var _n=new zt("MAT_MENU_PANEL"),ei=(()=>{class i{_elementRef=u(wt);_document=u(Xe);_focusMonitor=u(Qi);_parentMenu=u(_n,{optional:!0});_changeDetectorRef=u(te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new oe;_focused=new oe;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(Le).load(_i),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&q("click",function(p){return n._checkDisabled(p)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(ht("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),pt("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",qt],disableRipple:[2,"disableRipple","disableRipple",qt]},exportAs:["matMenuItem"],attrs:No,ngContentSelectors:Bo,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(Me(zo),jt(0),d(1,"span",0),jt(2,1),m(),X(3,"div",1),it(4,jo,2,0,":svg:svg",2)),e&2&&(b(3),N("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),b(),nt(n._triggersSubmenu?4:-1))},dependencies:[yr],encapsulation:2,changeDetection:0})}return i})();var Zo=new zt("MatMenuContent");var Uo=new zt("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),fn="_mat-menu-enter",Di="_mat-menu-exit",le=(()=>{class i{_elementRef=u(wt);_changeDetectorRef=u(te);_injector=u(we);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=be();_allItems;_directDescendantItems=new jn;_classList={};_panelAnimationState="void";_animationDone=new oe;_isAnimating=Ee(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=qi({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Kt;close=this.closed;panelId=u(fi).getId("mat-menu-panel-");constructor(){let t=u(Uo);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new gi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),Xi(t=>xe(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),a=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[a]&&!n[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),Xi(e=>xe(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:hi(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Hn(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=wn(qi({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Di;(e||t===fn)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===fn||t===Di)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Di),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?fn:Di)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ri(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,a){if(e&1&&Se(a,Zo,5)(a,ei,5)(a,ei,4),e&2){let p;Et(p=Ct())&&(n.lazyContent=p.first),Et(p=Ct())&&(n._allItems=p),Et(p=Ct())&&(n.items=p)}},viewQuery:function(e,n){if(e&1&&li(si,5),e&2){let a;Et(a=Ct())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(e,n){e&2&&ht("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",qt],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:qt(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ye([{provide:_n,useExisting:i}])],ngContentSelectors:Ho,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(Me(),Un(0,Vo,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),qo=new zt("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=u(we);return()=>wr(i)}});var He=new WeakMap,Xo=(()=>{class i{_canHaveBackdrop;_element=u(wt);_viewContainerRef=u(ci);_menuItemInstance=u(ei,{optional:!0,self:!0});_dir=u(ar,{optional:!0});_focusMonitor=u(Qi);_ngZone=u($t);_injector=u(we);_scrollStrategy=u(qo);_changeDetectorRef=u(te);_animationsDisabled=be();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ye.EMPTY;_menuCloseSubscription=ye.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=u(_n,{optional:!0});this._parentMaterialMenu=e instanceof le?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&He.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=He.get(e);He.set(e,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(e),p=a.getConfig(),v=p.positionStrategy;this._setPosition(e,v),this._canHaveBackdrop?p.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:p.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof le&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(qe(e.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof le&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Pn(1)).subscribe(()=>{e.detach(),He.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&He.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Tr(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof le&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Er({positionStrategy:Cr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",p=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,p)})})}_setPosition(t,e){let[n,a]=t.xPosition==="before"?["end","start"]:["start","end"],[p,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[w,D]=[p,v],[x,I]=[n,a],A=0;if(this._triggersSubmenu()){if(I=n=t.xPosition==="before"?"start":"end",a=x=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let H=this._parentMaterialMenu.items.first;this._parentInnerPadding=H?H._getHostElement().offsetTop:0}A=p==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(w=p==="top"?"bottom":"top",D=v==="top"?"bottom":"top");e.withPositions([{originX:n,originY:w,overlayX:x,overlayY:p,offsetY:A},{originX:a,originY:w,overlayX:I,overlayY:p,offsetY:A},{originX:n,originY:D,overlayX:x,overlayY:v,offsetY:-A},{originX:a,originY:D,overlayX:I,overlayY:v,offsetY:-A}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ue(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Sn(p=>this._menuOpen&&p!==this._menuItemInstance)):Ue();return xe(t,n,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new kr(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return He.get(t)===this}_triggerIsAriaDisabled(){return qt(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Zn()};static \u0275dir=_t({type:i})}return i})(),Pi=(()=>{class i extends Xo{_cleanupTouchstart;_hoverSubscription=ye.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Kt;onMenuOpen=this.menuOpened;menuClosed=new Kt;onMenuClose=this.menuClosed;constructor(){super(!0);let t=u(se);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{mr(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){lr(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&q("click",function(p){return n._handleClick(p)})("mousedown",function(p){return n._handleMousedown(p)})("keydown",function(p){return n._handleKeydown(p)}),e&2&&ht("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ue]})}return i})();var ii=class{brands=[];types=[];sort="name";pageNumber=1;pageSize=15;search=""};var me=class i{loading=!1;busyRequestCount=0;busy(){this.busyRequestCount++,this.loading=!0}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};function Go(i,r){if(i&1){let t=bt();d(0,"div",0)(1,"div",1)(2,"mat-icon",2),h(3),m(),d(4,"p",3),h(5),m(),d(6,"button",4),q("click",function(){st(t);let n=O();return ct(n.onAction())}),h(7),m()()()}if(i&2){let t=O();b(3),dt(t.icon()),b(2),yt(" ",t.message()," "),b(2),dt(t.actionText())}}var Ve=class i{busyService=u(me);message=Pe.required();icon=Pe.required();actionText=Pe.required();action=Wn();onAction(){this.action.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-empty-state"]],inputs:{message:[1,"message"],icon:[1,"icon"],actionText:[1,"actionText"]},outputs:{action:"action"},decls:1,vars:1,consts:[[1,"max-w-7xl","mx-auto","px-4","sm:px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-display","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&it(0,Go,8,3,"div",0),t&2&&nt(e.busyService.busyRequestCount===0?0:-1)},dependencies:[xt,It],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var Wo=(i,r)=>r.id;function Yo(i,r){if(i&1&&X(0,"app-product-item",14),i&2){let t=r.$implicit;N("product",t)}}function Qo(i,r){if(i&1&&(d(0,"mat-list-option",16),h(1),m()),i&2){let t=r.$implicit,e=O(2);N("value",t.value)("selected",e.shopParams.sort===t.value),b(),yt(" ",t.name," ")}}function Ko(i,r){if(i&1){let t=bt();d(0,"div",4)(1,"div",5)(2,"mat-paginator",6),q("page",function(n){st(t);let a=O();return ct(a.handlePageEvent(n))}),m(),d(3,"form",7,0)(5,"input",8),_e("ngModelChange",function(n){st(t);let a=O();return fe(a.shopParams.search,n)||(a.shopParams.search=n),ct(n)}),q("ngModelChange",function(){st(t);let n=O();return ct(n.onSearchChange())}),m(),d(6,"mat-icon",9),h(7,"search"),m()(),d(8,"div",10)(9,"button",11),q("click",function(){st(t);let n=O();return ct(n.openFiltersDialog())}),d(10,"mat-icon"),h(11,"filter_list"),m(),h(12," Filters "),m(),d(13,"button",12)(14,"mat-icon"),h(15,"swap_vert"),m(),h(16," Sort "),m()()(),d(17,"div",13),Zt(18,Yo,1,1,"app-product-item",14,Wo),m()(),d(20,"mat-menu",null,1)(22,"mat-selection-list",15,2),q("selectionChange",function(n){st(t);let a=O();return ct(a.onSortChange(n))}),Zt(24,Qo,2,3,"mat-list-option",16,pe),m()()}if(i&2){let t=Tt(21),e=O();b(2),N("pageIndex",e.shopParams.pageNumber-1)("pageSize",e.shopParams.pageSize)("length",e.products.count)("pageSizeOptions",e.pageSizeOptions)("showFirstLastButtons",!0),b(3),ge("ngModel",e.shopParams.search),b(8),N("matMenuTriggerFor",t),b(5),Ut(e.products.data),b(4),N("multiple",!1),b(2),Ut(e.sortOptions)}}function $o(i,r){if(i&1){let t=bt();d(0,"app-empty-state",17),q("action",function(){st(t);let n=O();return ct(n.resetFilters())}),m()}}var Ri=class i{shopService=u(Wt);dialogService=u(Ir);products;shopParams=new ii;pageSizeOptions=[5,10,15,20];sortOptions=[{name:"Alphabetical",value:"name"},{name:"Low-High",value:"priceAsc"},{name:"High-Low",value:"priceDesc"}];ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new ii,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:r=>this.products=r,error:r=>console.log(r)})}handlePageEvent(r){this.shopParams.pageNumber=r.pageIndex+1,this.shopParams.pageSize=r.pageSize,this.getProducts()}searchTerms=new oe;constructor(){this.searchTerms.pipe(Dn(400),Br()).subscribe(()=>{this.shopParams.pageNumber=1,this.getProducts()})}onSearchChange(){this.searchTerms.next(this.shopParams.search)}onSortChange(r){let t=r.options[0];t&&(this.shopParams.sort=t.value,this.shopParams.pageNumber=1,this.getProducts())}openFiltersDialog(){this.dialogService.open(Ii,{width:"min(500px, 95vw)",maxWidth:"95vw",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(this.shopParams.brands=t.brandsSelected,this.shopParams.types=t.typesSelected,this.shopParams.pageNumber=1,this.getProducts())}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-shop"]],decls:2,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],["sortList",""],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-3","lg:flex-row","lg:items-center","lg:justify-between"],["aria-label","Select page",3,"page","pageIndex","pageSize","length","pageSizeOptions","showFirstLastButtons"],[1,"relative","flex","w-full","items-center","lg:mx-4","lg:max-w-md"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-3","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:border-blue-500",3,"ngModelChange","ngModel"],[1,"absolute","right-3","top-3","text-gray-500"],[1,"flex","w-full","gap-2","lg:w-auto","lg:gap-3"],["mat-stroked-button","",3,"click"],["mat-stroked-button","",3,"matMenuTriggerFor"],[1,"grid","grid-cols-2","gap-3","sm:grid-cols-3","sm:gap-4","md:grid-cols-4","xl:grid-cols-5"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters",3,"action"]],template:function(t,e){t&1&&it(0,Ko,26,8)(1,$o,1,0,"app-empty-state",3),t&2&&nt(e.products&&e.products.count>0?0:1)},dependencies:[Ti,It,xt,le,ti,Je,Pi,zr,ze,Or,vi,Fe,Pr,Ne,Rr,Ve],encapsulation:2})};function Jo(i,r){if(i&1){let t=bt();d(0,"section",0)(1,"div",1)(2,"div",2)(3,"button",3)(4,"mat-icon"),h(5,"arrow_back"),m(),h(6," Back to shop "),m()(),d(7,"div",4)(8,"div",5),X(9,"img",6),m(),d(10,"div")(11,"h1",7),h(12),m(),d(13,"p"),h(14),m(),d(15,"div",8)(16,"p",9),h(17),Ie(18,"currency"),m()(),d(19,"div",10)(20,"button",11),q("click",function(){st(t);let n=O();return ct(n.updateCart())}),d(21,"mat-icon"),h(22,"shopping_cart"),m(),h(23),m(),d(24,"mat-form-field",12)(25,"mat-label"),h(26,"Quantity"),m(),d(27,"input",13),_e("ngModelChange",function(n){st(t);let a=O();return fe(a.quantity,n)||(a.quantity=n),ct(n)}),m()()(),X(28,"mat-divider"),d(29,"p",14),h(30),m()()()()()}if(i&2){let t=O();b(9),N("src",Jt(t.product.pictureUrl),Ce),b(3),dt(t.product.name),b(2),yt("You have ",t.quantityInCart," of this item in your cart"),b(3),yt(" ",De(18,9,t.product.price)," "),b(3),N("disabled",t.quantity===t.quantityInCart),b(3),yt(" ",t.getButtonText()," "),b(4),ge("ngModel",t.quantity),b(3),yt(" ",t.product.description," ")}}var Oi=class i{shopSerive=u(Wt);activatedRoute=u(er);product;cartService=u(Dt);quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let r=this.activatedRoute.snapshot.paramMap.get("id");r&&this.shopSerive.getProduct(+r).subscribe({next:t=>{this.product=t,this.updateQuantityInBasket()},error:t=>console.log(t)})}updateQuantityInBasket(){this.quantityInCart=this.cartService.cart()?.items.find(r=>r.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let r=this.quantity-this.quantityInCart;this.quantityInCart+=r,this.cartService.addItemToCart(this.product,r)}else{let r=this.quantityInCart-this.quantity;this.quantityInCart-=r,this.cartService.removeItemFromCart(this.product.id,r)}}getButtonText(){return this.quantityInCart>0?"Update Cart":"Add to Cart"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-[1536px]","px-4","mx-auto"],[1,"flex","justify-end","mb-4"],["mat-stroked-button","","routerLink","/shop"],[1,"grid","grid-cols-1","gap-4","lg:grid-cols-2","lg:gap-8"],[1,"max-w-xl","mx-auto","overflow-hidden","rounded-lg"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","flex-wrap","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(t,e){t&1&&it(0,Jo,31,11,"section",0),t&2&&nt(e.product?0:-1)},dependencies:[It,jr,xt,Nr,Fr,je,ze,vi,Lr,Fe,Ar,Ne,Mt,Re],styles:[".max-w-xl[_ngcontent-%COMP%]{max-width:545px}.ring-amber-50[_ngcontent-%COMP%]{background-color:#faf9fd}"]})};function ts(i,r){if(i&1&&(d(0,"li",4),h(1),m()),i&2){let t=r.$implicit;b(),dt(t)}}function es(i,r){if(i&1&&(d(0,"div",2)(1,"ul",3),Zt(2,ts,2,1,"li",4,pe),m()()),i&2){let t=O();b(2),Ut(t.modelStateError)}}var Li=class i{baseUrl=Oe.apiUrl;http=u(ui);modelStateError;get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:r=>console.log(r),error:r=>this.modelStateError=r})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","flex-wrap","justify-center","gap-2","sm:gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"button",1),q("click",function(){return e.get500Error()}),h(2,"Test 500 error"),m(),d(3,"button",1),q("click",function(){return e.get404Error()}),h(4,"Test 404 error"),m(),d(5,"button",1),q("click",function(){return e.get400Error()}),h(6,"Test 400 error"),m(),d(7,"button",1),q("click",function(){return e.get401Error()}),h(8,"Test 401 error"),m(),d(9,"button",1),q("click",function(){return e.get400ValidationError()}),h(10,"Test validation error"),m()(),it(11,es,4,0,"div",2)),t&2&&(b(11),nt(e.modelStateError?11:-1))},dependencies:[It],encapsulation:2})};var Ai=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","justify-center","items-center","bg-gray-100","min-h-96","px-4"],[1,"text-center"],[1,"text-blue-800!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-5"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"div",1)(2,"mat-icon",2),h(3,"error-outline"),m(),d(4,"h1",3),h(5,"404"),m(),d(6,"p",4),h(7,"Page not found"),m(),d(8,"button",5),h(9,"Back to shop"),m()()())},dependencies:[xt,Mt,Ae],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function is(i,r){if(i&1&&(d(0,"h5",2),h(1),m(),d(2,"p",3),h(3,"This error comes from the server, not Angular"),m(),d(4,"p",4),h(5,"What to do next?"),m(),d(6,"ol",5)(7,"li",6),h(8,"Check the network tab in chrome dev tools"),m(),d(9,"li",6),h(10,"Reproduce the error in postman. If same error, don't waste time troubleshooting angular code"),m()(),d(11,"h5",7),h(12," Stack trace"),m(),d(13,"mat-card",8)(14,"code",9),h(15),m()()),i&2){let t=O();b(),yt("Error: ",t.error.message),b(14),dt(t.error.details)}}var Fi=class i{constructor(r){this.router=r;let t=this.router.currentNavigation();this.error=t?.extras.state?.error}error;static \u0275fac=function(t){return new(t||i)(Vn(Xt))};static \u0275cmp=Z({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"mt-5","p-4","bg-gray-100","rounded","shadow-lg","break-words"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"h1",1),h(2,"Internal server error"),m(),it(3,is,16,2),m()),t&2&&(b(3),nt(e.error?3:-1))},dependencies:[pi],encapsulation:2})};var Ni=class i{cartService=u(Dt);item=Pe.required();incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:27,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","flex-wrap","items-center","justify-between","gap-3","lg:gap-6"],[1,"shrink-0","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20","object-cover","rounded",3,"src"],[1,"order-2","min-w-0","flex-1","space-y-2","lg:max-w-md"],[1,"font-medium","block",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!","flex","gap-2","items-center",3,"click"],[1,"order-3","flex","w-full","items-center","justify-between","gap-3","lg:w-auto","lg:gap-6"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","w-24","lg:w-32"],[1,"font-bold","text-xl","text-gray-900!"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"div",1)(2,"a",2),X(3,"img",3),m(),d(4,"div",4)(5,"a",5),h(6),m(),d(7,"div",6)(8,"button",7),q("click",function(){return e.removeItemFromCart()}),d(9,"mat-icon"),h(10,"delete"),m(),d(11,"span"),h(12,"Delete"),m()()()(),d(13,"div",8)(14,"div",9)(15,"button",10),q("click",function(){return e.decrementQuantity()}),d(16,"mat-icon",11),h(17,"remove"),m()(),d(18,"div",12),h(19),m(),d(20,"button",10),q("click",function(){return e.incrementQuantity()}),d(21,"mat-icon",13),h(22,"add"),m()()(),d(23,"div",14)(24,"p",15),h(25),Ie(26,"currency"),m()()()()()),t&2&&(b(2),N("routerLink",We("/shop/",e.item().productId)),b(),N("src",Jt(e.item().pictureUrl),Ce),b(2),N("routerLink",We("/shop/",e.item().productId)),b(),yt(" ",e.item().productName," "),b(13),yt(" ",e.item().quantity),b(6),dt(De(26,9,e.item().price)))},dependencies:[Mt,xt,It,xr,Re],encapsulation:2})};var ns=(i,r)=>r.productId;function rs(i,r){if(i&1&&X(0,"app-cart-item",3),i&2){let t=r.$implicit;N("item",t)}}function as(i,r){if(i&1&&(d(0,"div",0)(1,"div",2),Zt(2,rs,1,1,"app-cart-item",3,ns),m(),d(4,"div",4),X(5,"app-order-summary"),m()()),i&2){let t,e=O();b(2),Ut((t=e.cartService.cart())==null?null:t.items)}}function os(i,r){if(i&1){let t=bt();d(0,"app-empty-state",5),q("action",function(){st(t);let n=O();return ct(n.onAction())}),m()}}var zi=class i{router=u(Xt);cartService=u(Dt);onAction(){this.router.navigateByUrl("/shop")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","flex-col","items-start","gap-6","lg:flex-row"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop"],[1,"w-full","lg:w-3/4"],[3,"item"],[1,"w-full","lg:w-1/4"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop",3,"action"]],template:function(t,e){t&1&&(d(0,"section"),it(1,as,6,0,"div",0)(2,os,1,0,"app-empty-state",1),m()),t&2&&(b(),nt(e.cartService.cart()?1:2))},dependencies:[Ni,Vr,Ve],encapsulation:2})};var ga=()=>{let i=u(ce),r=u(Xt),t=u(bi);return i.isAdmin()?!0:(t.error("Request denied; You are not an admin."),r.createUrlTree(["/shop"]))};var fa=[{path:"",component:Ci},{path:"shop",component:Ri},{path:"shop/:id",component:Oi},{path:"cart",component:zi},{path:"checkout",loadChildren:()=>import("./chunk-PAE2YKZL.js").then(i=>i.checkoutRoutes)},{path:"orders",loadChildren:()=>import("./chunk-BRBQATKV.js").then(i=>i.orderRoutes)},{path:"account",loadChildren:()=>import("./chunk-HMIXOS3Q.js").then(i=>i.accountRoutes)},{path:"test-error",component:Li},{path:"not-found",component:Ai},{path:"server-error",component:Fi},{path:"admin",canActivate:[Zr],children:[{path:"",loadComponent:()=>import("./chunk-3HSDNZWK.js").then(i=>i.Admin),canActivate:[ga]}]},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var _a=(i,r)=>{let t=u(Xt),e=u(bi);return r(i).pipe(In(n=>{if(n.status===400)if(n.error.errors){let a=[];for(let p in n.error.errors)n.error.errors[p]&&a.push(n.error.errors[p]);throw a.flat()}else e.error(n.error.title||n.error);if(n.status===401&&e.error(n.error.title||n.error),n.status===403&&e.error("Forbidden"),n.status===404&&t.navigateByUrl("/not-found"),n.status===500){let a={state:{error:n.error}};t.navigateByUrl("/server-error",a)}return Cn(()=>n)}))};var ba=(i,r)=>{let t=u(me);return t.busy(),r(i).pipe(Oe.production?En:Rn(500),On(()=>t.idle()))};var Bi=class i{cartService=u(Dt);accountService=u(ce);signalrService=u(Hr);init(){let r=localStorage.getItem("cart_id"),t=r?this.cartService.getCart(r):Ue(null);return Mn({cart:t,user:this.accountService.getUserInfo().pipe(Ln(e=>{this.signalrService.createHubConnection()}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};var va=(i,r)=>{let t=i.clone({withCredentials:!0});return r(t)};var ya={providers:[Nn(),rr(fa),Yn(),qn(async()=>{let i=u(Bi);return Tn(i.init()).finally(()=>{let r=document.getElementById("initial-splash");r&&r.remove()})}),Jn(tr([_a,ba,va]))]};var xa="mat-badge-content",ss=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),ka=(()=>{class i{_ngZone=u($t);_elementRef=u(wt);_ariaDescriber=u(fr);_renderer=u(se);_animationsDisabled=be();_idGenerator=u(fi);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=u(gr);_document=u(Xe);constructor(){let t=u(Le);t.load(ss),t.load(cr)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(xa),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${xa}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_t({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&pt("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",qt],disabled:[2,"matBadgeDisabled","disabled",qt],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",qt]}})}return i})();function cs(i,r){i&1&&Ge(0,"div",2)}var ls=new zt("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ea=(()=>{class i{_elementRef=u(wt);_ngZone=u($t);_changeDetectorRef=u(te);_renderer=u(se);_cleanupTransitionEnd;constructor(){let t=_r(),e=u(ls,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=wa(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=wa(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Kt;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Z({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(e,n){e&2&&(ht("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),mi("mat-"+n.color),pt("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Yi],bufferValue:[2,"bufferValue","bufferValue",Yi],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,n){e&1&&(he(0,"div",0),Ge(1,"div",1),it(2,cs,1,0,"div",2),Te(),he(3,"div",3),Ge(4,"span",4),Te(),he(5,"div",5),Ge(6,"span",4),Te()),e&2&&(b(),Gi("flex-basis",n._getBufferBarFlexBasis()),b(),nt(n.mode==="buffer"?2:-1),b(),Gi("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function wa(i,r=0,t=100){return Math.max(r,Math.min(t,i))}var ji=class i{accountService=u(ce);viewContainerRef=u(ci);templateRef=u(si);constructor(){zn(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_t({type:i,selectors:[["","appIsAdmin",""]]})};var Ca=()=>({exact:!0});function ms(i,r){i&1&&(d(0,"a",24),h(1,"Admin"),m())}function ds(i,r){if(i&1&&(d(0,"div",25)(1,"button",26)(2,"mat-icon"),h(3,"arrow_drop_down"),m(),d(4,"span"),h(5),m()()(),d(6,"div",13)(7,"button",27)(8,"mat-icon"),h(9,"account_circle"),m()()()),i&2){let t,e=O(),n=Tt(24);b(),N("matMenuTriggerFor",n),b(4),dt((t=e.accountService.currentUser())==null?null:t.email),b(2),N("matMenuTriggerFor",n)}}function us(i,r){i&1&&(d(0,"div",12)(1,"button",28),h(2,"Login"),m(),d(3,"button",29),h(4,"Register"),m()())}function ps(i,r){i&1&&(d(0,"a",30)(1,"mat-icon"),h(2,"admin_panel_settings"),m(),h(3," Admin "),m())}function hs(i,r){if(i&1){let t=bt();d(0,"button",18)(1,"mat-icon"),h(2,"shopping_cart"),m(),h(3," My cart "),m(),d(4,"button",19)(5,"mat-icon"),h(6,"history"),m(),h(7," View Orders "),m(),d(8,"button",20),q("click",function(){st(t);let n=O();return ct(n.logout())}),d(9,"mat-icon"),h(10,"logout"),m(),h(11," Logout "),m()}}function gs(i,r){i&1&&(d(0,"button",31)(1,"mat-icon"),h(2,"login"),m(),h(3," Login "),m(),d(4,"button",32)(5,"mat-icon"),h(6,"person_add"),m(),h(7," Register "),m())}var Hi=class i{busyService=u(me);cartService=u(Dt);accountService=u(ce);router=u(Xt);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-header"]],decls:52,vars:11,consts:[["accountMenu","matMenu"],["mobileMenu","matMenu"],[1,"fixed","top-0","z-50","w-full","bg-white","shadow-md"],[1,"mx-auto","flex","h-16","max-w-[1536px]","items-center","justify-between","gap-2","px-4","lg:h-20","lg:px-6"],["routerLink","/","src","images/logo.png","alt","app logo",1,"max-h-10","lg:max-h-16"],[1,"hidden","gap-3","uppercase","text-xl","lg:flex","lg:my-2"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],[1,"flex","items-center","gap-2","lg:gap-4"],["routerLink","/cart","routerLinkActive","active","aria-label","My cart",1,"custom-badge","lg:mt-2",3,"matBadge"],[1,"hidden","gap-3","lg:flex"],[1,"lg:hidden"],["mat-icon-button","","aria-label","Open menu",3,"matMenuTriggerFor"],[1,"absolute","bottom-0","left-0","w-full"],["mode","indeterminate"],[1,"px-3"],["mat-menu-item","","routerLink","/cart"],["mat-menu-item","","routerLink","/orders"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-menu-item","","routerLink","/shop","routerLinkActive","active"],["mat-menu-item","","routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],["routerLink","/admin","routerLinkActive","active"],[1,"hidden","lg:block"],["mat-button","",3,"matMenuTriggerFor"],["mat-icon-button","","aria-label","Account",3,"matMenuTriggerFor"],["routerLink","account/login","mat-stroked-button",""],["routerLink","account/register","mat-stroked-button",""],["mat-menu-item","","routerLink","/admin","routerLinkActive","active"],["mat-menu-item","","routerLink","account/login"],["mat-menu-item","","routerLink","account/register"]],template:function(t,e){if(t&1&&(d(0,"header",2)(1,"div",3),X(2,"img",4),d(3,"nav",5)(4,"a",6),h(5,"Home"),m(),d(6,"a",7),h(7,"Shop"),m(),d(8,"a",8),h(9,"Errors"),m(),Bt(10,ms,2,0,"a",9),m(),d(11,"div",10)(12,"a",11)(13,"mat-icon"),h(14,"shopping_cart"),m()(),it(15,ds,10,3)(16,us,5,0,"div",12),d(17,"div",13)(18,"button",14)(19,"mat-icon"),h(20,"menu"),m()()()()(),d(21,"div",15),X(22,"mat-progress-bar",16),m()(),d(23,"mat-menu",17,0)(25,"button",18)(26,"mat-icon"),h(27,"shopping_cart"),m(),h(28," My cart "),m(),d(29,"button",19)(30,"mat-icon"),h(31,"history"),m(),h(32," View Orders "),m(),X(33,"mat-divider"),d(34,"button",20),q("click",function(){return e.logout()}),d(35,"mat-icon"),h(36,"logout"),m(),h(37," Logout "),m()(),d(38,"mat-menu",null,1)(40,"a",21)(41,"mat-icon"),h(42,"home"),m(),h(43," Home "),m(),d(44,"a",22)(45,"mat-icon"),h(46,"storefront"),m(),h(47," Shop "),m(),Bt(48,ps,4,0,"a",23),X(49,"mat-divider"),it(50,hs,12,0)(51,gs,8,0),m()),t&2){let n=Tt(39);b(4),N("routerLinkActiveOptions",Wi(9,Ca)),b(8),N("matBadge",Jt(e.cartService.itemCount())),b(3),nt(e.accountService.currentUser()?15:16),b(3),N("matMenuTriggerFor",n),b(4),pt("invisible",!e.busyService.loading),b(18),N("routerLinkActiveOptions",Wi(10,Ca)),b(10),nt(e.accountService.currentUser()?50:51)}},dependencies:[xt,ka,It,Mt,nr,Ea,le,Pi,je,ei,ji],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}"]})};var Vi=class i{title="Skinet";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Z({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-20","lg:mt-24"]],template:function(t,e){t&1&&(X(0,"app-header"),d(1,"div",0),X(2,"router-outlet"),m())},dependencies:[ir,Hi],encapsulation:2})};Kn(Vi,ya).catch(i=>console.error(i));
