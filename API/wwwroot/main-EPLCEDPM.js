import{a as Cr,b as wt,c as Hr,g as Ur}from"./chunk-JYE4NBZU.js";import{a as Xr}from"./chunk-IFD2TLII.js";import{a as di,b as lr,c as mr,d as bi,e as qr,f as ue}from"./chunk-OJKPJJFU.js";import{a as de,b as Dr,c as Pr,d as Rr,i as Ki,k as Vr}from"./chunk-BV7JPCRD.js";import{a as $i}from"./chunk-QVF4VA3T.js";import{B as jr,F as Zr,a as ft,c as Or,d as fi,i as Le,j as Lr,k as Ar,l as Ae,m as Fr,n as Nr,r as zr,t as Fe,w as Br}from"./chunk-F7TJLRMD.js";import{$ as jn,$a as Dt,$b as Rt,Aa as mt,Ac as ui,Ba as $,Bb as $n,Ca as K,Cb as Pe,Cc as pi,D as ei,Da as fe,Dc as hi,E as Xi,F as Ze,Fa as Mt,Fb as Kn,G as An,Ga as St,Gb as ee,Gc as vr,Ha as F,Hb as Wt,I as Fn,Ia as o,Ib as Yi,J as ii,Ja as s,Jc as yr,Ka as X,Kc as ke,L as Vt,La as be,Lc as Lt,Ma as Se,Mc as xr,N as p,Na as Ue,Nc as kr,O as it,Ob as Jn,Oc as wr,P as nt,Pc as _i,Q as ni,Qb as me,Qc as gi,R as Nn,Ra as gt,S as Te,Sa as Wn,Sb as tr,Sc as kt,T as qe,Ta as O,Tc as Oe,Ua as Yn,V as Kt,Va as R,Vb as er,W as Jt,Wa as Ie,Wb as ir,Xa as Zt,Xb as nr,Y as zn,Ya as De,Z as Me,Za as si,Zb as rr,_ as Bn,_a as It,_b as ar,_c as Er,a as Ui,aa as ri,ac as Ot,b as Cn,ba as Et,bc as or,ca as Vn,cc as sr,d as Ce,db as Pt,dc as mi,e as En,ea as ce,eb as Gi,ec as cr,ed as Tr,fa as Hn,fb as ut,fd as Mr,g as se,ga as _,gb as ci,gc as Re,ha as Zn,hb as u,hc as dr,ia as ai,ib as st,id as Sr,jb as _t,jc as ur,k as He,ka as le,kc as pr,l as Tn,la as qn,lb as ve,lc as hr,ld as Ir,m as Mn,ma as Un,mb as ye,na as oi,nb as xe,nc as _r,oa as j,ob as te,oc as gr,pb as Xe,q as Sn,qa as yt,qb as Ge,qc as Qi,rb as Wi,s as Ee,t as In,ta as ge,u as Dn,ua as Ht,ub as Xt,uc as fr,v as Pn,va as Xn,vb as Gt,w as Rn,wc as br,x as On,xb as li,y as Ln,ya as Gn,zb as Qn}from"./chunk-FNVE6S2J.js";var Da=Object.defineProperty,Pa=Object.defineProperties,Ra=Object.getOwnPropertyDescriptors,Gr=Object.getOwnPropertySymbols,Oa=Object.prototype.hasOwnProperty,La=Object.prototype.propertyIsEnumerable,en=(i,r,t)=>r in i?Da(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,Wr=(i,r)=>{for(var t in r||(r={}))Oa.call(r,t)&&en(i,t,r[t]);if(Gr)for(var t of Gr(r))La.call(r,t)&&en(i,t,r[t]);return i},Aa=(i,r)=>Pa(i,Ra(r)),A=(i,r,t)=>(en(i,typeof r!="symbol"?r+"":r,t),t),Yt=globalThis;function At(i){return(Yt.__Zone_symbol_prefix||"__zone_symbol__")+i}function Fa(){let i=Yt.performance;function r(Y){i&&i.mark&&i.mark(Y)}function t(Y,m){i&&i.measure&&i.measure(Y,m)}r("Zone");let e=class nn{constructor(m,l){A(this,"_parent"),A(this,"_name"),A(this,"_properties"),A(this,"_zoneDelegate"),this._parent=m,this._name=l?l.name||"unnamed":"<root>",this._properties=l&&l.properties||{},this._zoneDelegate=new h(this,this._parent&&this._parent._zoneDelegate,l)}static assertZonePatched(){if(Yt.Promise!==L.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let m=nn.current;for(;m.parent;)m=m.parent;return m}static get current(){return S.zone}static get currentTask(){return vt}static __load_patch(m,l,c=!1){if(L.hasOwnProperty(m)){let M=Yt[At("forceDuplicateZoneCheck")]===!0;if(!c&&M)throw Error("Already loaded patch: "+m)}else if(!Yt["__Zone_disable_"+m]){let M="Zone:"+m;r(M),L[m]=l(Yt,nn,q),t(M,M)}}get parent(){return this._parent}get name(){return this._name}get(m){let l=this.getZoneWith(m);if(l)return l._properties[m]}getZoneWith(m){let l=this;for(;l;){if(l._properties.hasOwnProperty(m))return l;l=l._parent}return null}fork(m){if(!m)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,m)}wrap(m,l){if(typeof m!="function")throw new Error("Expecting function got: "+m);let c=this._zoneDelegate.intercept(this,m,l),M=this;return function(){return M.runGuarded(c,this,arguments,l)}}run(m,l,c,M){S={parent:S,zone:this};try{return this._zoneDelegate.invoke(this,m,l,c,M)}finally{S=S.parent}}runGuarded(m,l=null,c,M){S={parent:S,zone:this};try{try{return this._zoneDelegate.invoke(this,m,l,c,M)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{S=S.parent}}runTask(m,l,c){if(m.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(m.zone||pt).name+"; Execution: "+this.name+")");let M=m,{type:Q,data:{isPeriodic:U=!1,isRefreshable:Nt=!1}={}}=m;if(m.state===T&&(Q===z||Q===lt))return;let Qt=m.state!=G;Qt&&M._transitionTo(G,J);let $t=vt;vt=M,S={parent:S,zone:this};try{Q==lt&&m.data&&!U&&!Nt&&(m.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,M,l,c)}catch(zt){if(this._zoneDelegate.handleError(this,zt))throw zt}}finally{let zt=m.state;if(zt!==T&&zt!==tt)if(Q==z||U||Nt&&zt===y)Qt&&M._transitionTo(J,G,y);else{let f=M._zoneDelegates;this._updateTaskCount(M,-1),Qt&&M._transitionTo(T,G,T),Nt&&(M._zoneDelegates=f)}S=S.parent,vt=$t}}scheduleTask(m){if(m.zone&&m.zone!==this){let c=this;for(;c;){if(c===m.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${m.zone.name}`);c=c.parent}}m._transitionTo(y,T);let l=[];m._zoneDelegates=l,m._zone=this;try{m=this._zoneDelegate.scheduleTask(this,m)}catch(c){throw m._transitionTo(tt,y,T),this._zoneDelegate.handleError(this,c),c}return m._zoneDelegates===l&&this._updateTaskCount(m,1),m.state==y&&m._transitionTo(J,y),m}scheduleMicroTask(m,l,c,M){return this.scheduleTask(new v(C,m,l,c,M,void 0))}scheduleMacroTask(m,l,c,M,Q){return this.scheduleTask(new v(lt,m,l,c,M,Q))}scheduleEventTask(m,l,c,M,Q){return this.scheduleTask(new v(z,m,l,c,M,Q))}cancelTask(m){if(m.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(m.zone||pt).name+"; Execution: "+this.name+")");if(!(m.state!==J&&m.state!==G)){m._transitionTo(ot,J,G);try{this._zoneDelegate.cancelTask(this,m)}catch(l){throw m._transitionTo(tt,ot),this._zoneDelegate.handleError(this,l),l}return this._updateTaskCount(m,-1),m._transitionTo(T,ot),m.runCount=-1,m}}_updateTaskCount(m,l){let c=m._zoneDelegates;l==-1&&(m._zoneDelegates=null);for(let M=0;M<c.length;M++)c[M]._updateTaskCount(m.type,l)}};A(e,"__symbol__",At);let n=e,a={name:"",onHasTask:(Y,m,l,c)=>Y.hasTask(l,c),onScheduleTask:(Y,m,l,c)=>Y.scheduleTask(l,c),onInvokeTask:(Y,m,l,c,M,Q)=>Y.invokeTask(l,c,M,Q),onCancelTask:(Y,m,l,c)=>Y.cancelTask(l,c)};class h{constructor(m,l,c){A(this,"_zone"),A(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),A(this,"_parentDelegate"),A(this,"_forkDlgt"),A(this,"_forkZS"),A(this,"_forkCurrZone"),A(this,"_interceptDlgt"),A(this,"_interceptZS"),A(this,"_interceptCurrZone"),A(this,"_invokeDlgt"),A(this,"_invokeZS"),A(this,"_invokeCurrZone"),A(this,"_handleErrorDlgt"),A(this,"_handleErrorZS"),A(this,"_handleErrorCurrZone"),A(this,"_scheduleTaskDlgt"),A(this,"_scheduleTaskZS"),A(this,"_scheduleTaskCurrZone"),A(this,"_invokeTaskDlgt"),A(this,"_invokeTaskZS"),A(this,"_invokeTaskCurrZone"),A(this,"_cancelTaskDlgt"),A(this,"_cancelTaskZS"),A(this,"_cancelTaskCurrZone"),A(this,"_hasTaskDlgt"),A(this,"_hasTaskDlgtOwner"),A(this,"_hasTaskZS"),A(this,"_hasTaskCurrZone"),this._zone=m,this._parentDelegate=l,this._forkZS=c&&(c&&c.onFork?c:l._forkZS),this._forkDlgt=c&&(c.onFork?l:l._forkDlgt),this._forkCurrZone=c&&(c.onFork?this._zone:l._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:l._interceptZS),this._interceptDlgt=c&&(c.onIntercept?l:l._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this._zone:l._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:l._invokeZS),this._invokeDlgt=c&&(c.onInvoke?l:l._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this._zone:l._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:l._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?l:l._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this._zone:l._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:l._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?l:l._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this._zone:l._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:l._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?l:l._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this._zone:l._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:l._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?l:l._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this._zone:l._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let M=c&&c.onHasTask,Q=l&&l._hasTaskZS;(M||Q)&&(this._hasTaskZS=M?c:a,this._hasTaskDlgt=l,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,c.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=l,this._scheduleTaskCurrZone=this._zone),c.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=l,this._invokeTaskCurrZone=this._zone),c.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=l,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(m,l){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,l):new n(m,l)}intercept(m,l,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,l,c):l}invoke(m,l,c,M,Q){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,l,c,M,Q):l.apply(c,M)}handleError(m,l){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,l):!0}scheduleTask(m,l){let c=l;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,l),c||(c=l);else if(l.scheduleFn)l.scheduleFn(l);else if(l.type==C)ct(l);else throw new Error("Task is missing scheduleFn.");return c}invokeTask(m,l,c,M){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,l,c,M):l.callback.apply(c,M)}cancelTask(m,l){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,l);else{if(!l.cancelFn)throw Error("Task is not cancelable");c=l.cancelFn(l)}return c}hasTask(m,l){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,l)}catch(c){this.handleError(m,c)}}_updateTaskCount(m,l){let c=this._taskCounts,M=c[m],Q=c[m]=M+l;if(Q<0)throw new Error("More tasks executed then were scheduled.");if(M==0||Q==0){let U={microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:m};this.hasTask(this._zone,U)}}}class v{constructor(m,l,c,M,Q,U){if(A(this,"type"),A(this,"source"),A(this,"invoke"),A(this,"callback"),A(this,"data"),A(this,"scheduleFn"),A(this,"cancelFn"),A(this,"_zone",null),A(this,"runCount",0),A(this,"_zoneDelegates",null),A(this,"_state","notScheduled"),this.type=m,this.source=l,this.data=M,this.scheduleFn=Q,this.cancelFn=U,!c)throw new Error("callback is not defined");this.callback=c;let Nt=this;m===z&&M&&M.useG?this.invoke=v.invokeTask:this.invoke=function(){return v.invokeTask.call(Yt,Nt,this,arguments)}}static invokeTask(m,l,c){m||(m=this),Ct++;try{return m.runCount++,m.zone.runTask(m,l,c)}finally{Ct==1&&xt(),Ct--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(T,y)}_transitionTo(m,l,c){if(this._state===l||this._state===c)this._state=m,m==T&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${l}'${c?" or '"+c+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let w=At("setTimeout"),D=At("Promise"),x=At("then"),I=[],N=!1,Z;function bt(Y){if(Z||Yt[D]&&(Z=Yt[D].resolve(0)),Z){let m=Z[x];m||(m=Z.then),m.call(Z,Y)}else Yt[w](Y,0)}function ct(Y){Ct===0&&I.length===0&&bt(xt),Y&&I.push(Y)}function xt(){if(!N){for(N=!0;I.length;){let Y=I;I=[];for(let m=0;m<Y.length;m++){let l=Y[m];try{l.zone.runTask(l,null,null)}catch(c){q.onUnhandledError(c)}}}q.microtaskDrainDone(),N=!1}}let pt={name:"NO ZONE"},T="notScheduled",y="scheduling",J="scheduled",G="running",ot="canceling",tt="unknown",C="microTask",lt="macroTask",z="eventTask",L={},q={symbol:At,currentZoneFrame:()=>S,onUnhandledError:et,microtaskDrainDone:et,scheduleMicroTask:ct,showUncaughtError:()=>!n[At("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:et,patchMethod:()=>et,bindArguments:()=>[],patchThen:()=>et,patchMacroTask:()=>et,patchEventPrototype:()=>et,getGlobalObjects:()=>{},ObjectDefineProperty:()=>et,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>et,wrapWithCurrentZone:()=>et,filterProperties:()=>[],attachOriginToPatched:()=>et,_redefineProperty:()=>et,patchCallbacks:()=>et,nativeScheduleMicroTask:bt},S={parent:null,zone:new n(null,null)},vt=null,Ct=0;function et(){}return t("Zone","Zone"),n}function Na(){var i;let r=globalThis,t=r[At("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(t||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=r.Zone)!=null||(r.Zone=Fa()),r.Zone}var Ye=Object.getOwnPropertyDescriptor,an=Object.defineProperty,on=Object.getPrototypeOf,za=Object.create,Ba=Array.prototype.slice,sn="addEventListener",cn="removeEventListener",Ji=At(sn),tn=At(cn),ie="true",ne="false",Qe=At("");function ln(i,r){return Zone.current.wrap(i,r)}function mn(i,r,t,e,n){return Zone.current.scheduleMacroTask(i,r,t,e,n)}var W=At,xi=typeof window<"u",ki=xi?window:void 0,ht=xi&&ki||globalThis,ja="removeAttribute";function dn(i,r){for(let t=i.length-1;t>=0;t--)typeof i[t]=="function"&&(i[t]=ln(i[t],r+"_"+t));return i}function Va(i,r){let t=i.constructor.name;for(let e=0;e<r.length;e++){let n=r[e],a=i[n];if(a){let h=Ye(i,n);if(!ta(h))continue;i[n]=(v=>{let w=function(){return v.apply(this,dn(arguments,t+"."+n))};return ae(w,v),w})(a)}}}function ta(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var ea=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,wi=!("nw"in ht)&&typeof ht.process<"u"&&ht.process.toString()==="[object process]",un=!wi&&!ea&&!!(xi&&ki.HTMLElement),ia=typeof ht.process<"u"&&ht.process.toString()==="[object process]"&&!ea&&!!(xi&&ki.HTMLElement),yi={},Ha=W("enable_beforeunload"),Yr=function(i){if(i=i||ht.event,!i)return;let r=yi[i.type];r||(r=yi[i.type]=W("ON_PROPERTY"+i.type));let t=this||i.target||ht,e=t[r],n;if(un&&t===ki&&i.type==="error"){let a=i;n=e&&e.call(this,a.message,a.filename,a.lineno,a.colno,a.error),n===!0&&i.preventDefault()}else n=e&&e.apply(this,arguments),i.type==="beforeunload"&&ht[Ha]&&typeof n=="string"?i.returnValue=n:n!=null&&!n&&i.preventDefault();return n};function Qr(i,r,t){let e=Ye(i,r);if(!e&&t&&Ye(t,r)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let n=W("on"+r+"patched");if(i.hasOwnProperty(n)&&i[n])return;delete e.writable,delete e.value;let a=e.get,h=e.set,v=r.slice(2),w=yi[v];w||(w=yi[v]=W("ON_PROPERTY"+v)),e.set=function(D){let x=this;if(!x&&i===ht&&(x=ht),!x)return;typeof x[w]=="function"&&x.removeEventListener(v,Yr),h?.call(x,null),x[w]=D,typeof D=="function"&&x.addEventListener(v,Yr,!1)},e.get=function(){let D=this;if(!D&&i===ht&&(D=ht),!D)return null;let x=D[w];if(x)return x;if(a){let I=a.call(this);if(I)return e.set.call(this,I),typeof D[ja]=="function"&&D.removeAttribute(r),I}return null},an(i,r,e),i[n]=!0}function na(i,r,t){if(r)for(let e=0;e<r.length;e++)Qr(i,"on"+r[e],t);else{let e=[];for(let n in i)n.slice(0,2)=="on"&&e.push(n);for(let n=0;n<e.length;n++)Qr(i,e[n],t)}}var qt=W("originalInstance");function We(i){let r=ht[i];if(!r)return;ht[W(i)]=r,ht[i]=function(){let n=dn(arguments,i);switch(n.length){case 0:this[qt]=new r;break;case 1:this[qt]=new r(n[0]);break;case 2:this[qt]=new r(n[0],n[1]);break;case 3:this[qt]=new r(n[0],n[1],n[2]);break;case 4:this[qt]=new r(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},ae(ht[i],r);let t=new r(function(){}),e;for(e in t)i==="XMLHttpRequest"&&e==="responseBlob"||(function(n){typeof t[n]=="function"?ht[i].prototype[n]=function(){return this[qt][n].apply(this[qt],arguments)}:an(ht[i].prototype,n,{set:function(a){typeof a=="function"?(this[qt][n]=ln(a,i+"."+n),ae(this[qt][n],a)):this[qt][n]=a},get:function(){return this[qt][n]}})})(e);for(e in r)e!=="prototype"&&r.hasOwnProperty(e)&&(ht[i][e]=r[e])}function Za(i,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(r,e,{get:function(){return i[e]},set:function(a){n&&(!n.writable||typeof n.set!="function")||(i[e]=a)},enumerable:n?n.enumerable:!0,configurable:n?n.configurable:!0})})}var qa=!1;function re(i,r,t){let e=i;for(;e&&!e.hasOwnProperty(r);)e=on(e);!e&&i[r]&&(e=i);let n=W(r),a=null;if(e&&(!(a=e[n])||!e.hasOwnProperty(n))){a=e[n]=e[r];let h=e&&Ye(e,r);if(ta(h)){let v=t(a,n,r);e[r]=function(){return v(this,arguments)},ae(e[r],a),qa&&Za(a,e[r])}}return a}function Ua(i,r,t){let e=null;function n(a){let h=a.data;return h.args[h.cbIdx]=function(){a.invoke.apply(this,arguments)},e.apply(h.target,h.args),a}e=re(i,r,a=>function(h,v){let w=t(h,v);return w.cbIdx>=0&&typeof v[w.cbIdx]=="function"?mn(w.name,v[w.cbIdx],w,n):a.apply(h,v)})}function ae(i,r){i[W("OriginalDelegate")]=r}function $r(i){return typeof i=="function"}function Kr(i){return typeof i=="number"}var Xa={useG:!0},Ft={},ra={},aa=new RegExp("^"+Qe+"(\\w+)(true|false)$"),oa=W("propagationStopped");function sa(i,r){let t=(r?r(i):i)+ne,e=(r?r(i):i)+ie,n=Qe+t,a=Qe+e;Ft[i]={},Ft[i][ne]=n,Ft[i][ie]=a}function Ga(i,r,t,e){let n=e&&e.add||sn,a=e&&e.rm||cn,h=e&&e.listeners||"eventListeners",v=e&&e.rmAll||"removeAllListeners",w=W(n),D="."+n+":",x="prependListener",I="."+x+":",N=function(T,y,J){if(T.isRemoved)return;let G=T.callback;typeof G=="object"&&G.handleEvent&&(T.callback=C=>G.handleEvent(C),T.originalDelegate=G);let ot;try{T.invoke(T,y,[J])}catch(C){ot=C}let tt=T.options;if(tt&&typeof tt=="object"&&tt.once){let C=T.originalDelegate?T.originalDelegate:T.callback;y[a].call(y,J.type,C,tt)}return ot};function Z(T,y,J){if(y=y||i.event,!y)return;let G=T||y.target||i,ot=G[Ft[y.type][J?ie:ne]];if(ot){let tt=[];if(ot.length===1){let C=N(ot[0],G,y);C&&tt.push(C)}else{let C=ot.slice();for(let lt=0;lt<C.length&&!(y&&y[oa]===!0);lt++){let z=N(C[lt],G,y);z&&tt.push(z)}}if(tt.length===1)throw tt[0];for(let C=0;C<tt.length;C++){let lt=tt[C];r.nativeScheduleMicroTask(()=>{throw lt})}}}let bt=function(T){return Z(this,T,!1)},ct=function(T){return Z(this,T,!0)};function xt(T,y){if(!T)return!1;let J=!0;y&&y.useG!==void 0&&(J=y.useG);let G=y&&y.vh,ot=!0;y&&y.chkDup!==void 0&&(ot=y.chkDup);let tt=!1;y&&y.rt!==void 0&&(tt=y.rt);let C=T;for(;C&&!C.hasOwnProperty(n);)C=on(C);if(!C&&T[n]&&(C=T),!C||C[w])return!1;let lt=y&&y.eventNameToString,z={},L=C[w]=C[n],q=C[W(a)]=C[a],S=C[W(h)]=C[h],vt=C[W(v)]=C[v],Ct;y&&y.prepend&&(Ct=C[W(y.prepend)]=C[y.prepend]);function et(d,b){return b?typeof d=="boolean"?{capture:d,passive:!0}:d?typeof d=="object"&&d.passive!==!1?Aa(Wr({},d),{passive:!0}):d:{passive:!0}:d}let Y=function(d){if(!z.isExisting)return L.call(z.target,z.eventName,z.capture?ct:bt,z.options)},m=function(d){if(!d.isRemoved){let b=Ft[d.eventName],E;b&&(E=b[d.capture?ie:ne]);let P=E&&d.target[E];if(P){for(let k=0;k<P.length;k++)if(P[k]===d){P.splice(k,1),d.isRemoved=!0,d.removeAbortListener&&(d.removeAbortListener(),d.removeAbortListener=null),P.length===0&&(d.allRemoved=!0,d.target[E]=null);break}}}if(d.allRemoved)return q.call(d.target,d.eventName,d.capture?ct:bt,d.options)},l=function(d){return L.call(z.target,z.eventName,d.invoke,z.options)},c=function(d){return Ct.call(z.target,z.eventName,d.invoke,z.options)},M=function(d){return q.call(d.target,d.eventName,d.invoke,d.options)},Q=J?Y:l,U=J?m:M,Nt=function(d,b){let E=typeof b;return E==="function"&&d.callback===b||E==="object"&&d.originalDelegate===b},Qt=y?.diff||Nt,$t=Zone[W("UNPATCHED_EVENTS")],zt=i[W("PASSIVE_EVENTS")];function f(d){if(typeof d=="object"&&d!==null){let b=Wr({},d);return d.signal&&(b.signal=d.signal),b}return d}let g=function(d,b,E,P,k=!1,B=!1){return function(){let V=this||i,H=arguments[0];y&&y.transferEventName&&(H=y.transferEventName(H));let rt=arguments[1];if(!rt)return d.apply(this,arguments);if(wi&&H==="uncaughtException")return d.apply(this,arguments);let at=!1;if(typeof rt!="function"){if(!rt.handleEvent)return d.apply(this,arguments);at=!0}if(G&&!G(d,rt,V,arguments))return;let oe=!!zt&&zt.indexOf(H)!==-1,Bt=f(et(arguments[2],oe)),_e=Bt?.signal;if(_e?.aborted)return;if($t){for(let Ut=0;Ut<$t.length;Ut++)if(H===$t[Ut])return oe?d.call(V,H,rt,Bt):d.apply(this,arguments)}let Zi=Bt?typeof Bt=="boolean"?!0:Bt.capture:!1,vn=Bt&&typeof Bt=="object"?Bt.once:!1,Ia=Zone.current,qi=Ft[H];qi||(sa(H,lt),qi=Ft[H]);let yn=qi[Zi?ie:ne],we=V[yn],xn=!1;if(we){if(xn=!0,ot){for(let Ut=0;Ut<we.length;Ut++)if(Qt(we[Ut],rt))return}}else we=V[yn]=[];let ti,kn=V.constructor.name,wn=ra[kn];wn&&(ti=wn[H]),ti||(ti=kn+b+(lt?lt(H):H)),z.options=Bt,vn&&(z.options.once=!1),z.target=V,z.capture=Zi,z.eventName=H,z.isExisting=xn;let Ve=J?Xa:void 0;Ve&&(Ve.taskData=z),_e&&(z.options.signal=void 0);let jt=Ia.scheduleEventTask(ti,rt,Ve,E,P);if(_e){z.options.signal=_e;let Ut=()=>jt.zone.cancelTask(jt);d.call(_e,"abort",Ut,{once:!0}),jt.removeAbortListener=()=>_e.removeEventListener("abort",Ut)}if(z.target=null,Ve&&(Ve.taskData=null),vn&&(z.options.once=!0),typeof jt.options!="boolean"&&(jt.options=Bt),jt.target=V,jt.capture=Zi,jt.eventName=H,at&&(jt.originalDelegate=rt),B?we.unshift(jt):we.push(jt),k)return V}};return C[n]=g(L,D,Q,U,tt),Ct&&(C[x]=g(Ct,I,c,U,tt,!0)),C[a]=function(){let d=this||i,b=arguments[0];y&&y.transferEventName&&(b=y.transferEventName(b));let E=arguments[2],P=E?typeof E=="boolean"?!0:E.capture:!1,k=arguments[1];if(!k)return q.apply(this,arguments);if(G&&!G(q,k,d,arguments))return;let B=Ft[b],V;B&&(V=B[P?ie:ne]);let H=V&&d[V];if(H)for(let rt=0;rt<H.length;rt++){let at=H[rt];if(Qt(at,k)){if(H.splice(rt,1),at.isRemoved=!0,H.length===0&&(at.allRemoved=!0,d[V]=null,!P&&typeof b=="string")){let oe=Qe+"ON_PROPERTY"+b;d[oe]=null}return at.zone.cancelTask(at),tt?d:void 0}}return q.apply(this,arguments)},C[h]=function(){let d=this||i,b=arguments[0];y&&y.transferEventName&&(b=y.transferEventName(b));let E=[],P=ca(d,lt?lt(b):b);for(let k=0;k<P.length;k++){let B=P[k],V=B.originalDelegate?B.originalDelegate:B.callback;E.push(V)}return E},C[v]=function(){let d=this||i,b=arguments[0];if(b){y&&y.transferEventName&&(b=y.transferEventName(b));let E=Ft[b];if(E){let P=E[ne],k=E[ie],B=d[P],V=d[k];if(B){let H=B.slice();for(let rt=0;rt<H.length;rt++){let at=H[rt],oe=at.originalDelegate?at.originalDelegate:at.callback;this[a].call(this,b,oe,at.options)}}if(V){let H=V.slice();for(let rt=0;rt<H.length;rt++){let at=H[rt],oe=at.originalDelegate?at.originalDelegate:at.callback;this[a].call(this,b,oe,at.options)}}}}else{let E=Object.keys(d);for(let P=0;P<E.length;P++){let k=E[P],B=aa.exec(k),V=B&&B[1];V&&V!=="removeListener"&&this[v].call(this,V)}this[v].call(this,"removeListener")}if(tt)return this},ae(C[n],L),ae(C[a],q),vt&&ae(C[v],vt),S&&ae(C[h],S),!0}let pt=[];for(let T=0;T<t.length;T++)pt[T]=xt(t[T],e);return pt}function ca(i,r){if(!r){let a=[];for(let h in i){let v=aa.exec(h),w=v&&v[1];if(w&&(!r||w===r)){let D=i[h];if(D)for(let x=0;x<D.length;x++)a.push(D[x])}}return a}let t=Ft[r];t||(sa(r),t=Ft[r]);let e=i[t[ne]],n=i[t[ie]];return e?n?e.concat(n):e.slice():n?n.slice():[]}function Wa(i,r){let t=i.Event;t&&t.prototype&&r.patchMethod(t.prototype,"stopImmediatePropagation",e=>function(n,a){n[oa]=!0,e&&e.apply(n,a)})}function Ya(i,r){r.patchMethod(i,"queueMicrotask",t=>function(e,n){Zone.current.scheduleMicroTask("queueMicrotask",n[0])})}var vi=W("zoneTask");function Ne(i,r,t,e){let n=null,a=null;r+=e,t+=e;let h={};function v(D){let x=D.data;x.args[0]=function(){return D.invoke.apply(this,arguments)};let I=n.apply(i,x.args);return Kr(I)?x.handleId=I:(x.handle=I,x.isRefreshable=$r(I.refresh)),D}function w(D){let{handle:x,handleId:I}=D.data;return a.call(i,x??I)}n=re(i,r,D=>function(x,I){var N;if($r(I[0])){let Z={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?I[1]||0:void 0,args:I},bt=I[0];I[0]=function(){try{return bt.apply(this,arguments)}finally{let{handle:G,handleId:ot,isPeriodic:tt,isRefreshable:C}=Z;!tt&&!C&&(ot?delete h[ot]:G&&(G[vi]=null))}};let ct=mn(r,I[0],Z,v,w);if(!ct)return ct;let{handleId:xt,handle:pt,isRefreshable:T,isPeriodic:y}=ct.data;if(xt)h[xt]=ct;else if(pt&&(pt[vi]=ct,T&&!y)){let J=pt.refresh;pt.refresh=function(){let{zone:G,state:ot}=ct;return ot==="notScheduled"?(ct._state="scheduled",G._updateTaskCount(ct,1)):ot==="running"&&(ct._state="scheduling"),J.call(this)}}return(N=pt??xt)!=null?N:ct}else return D.apply(i,I)}),a=re(i,t,D=>function(x,I){let N=I[0],Z;Kr(N)?(Z=h[N],delete h[N]):(Z=N?.[vi],Z?N[vi]=null:Z=N),Z?.type?Z.cancelFn&&Z.zone.cancelTask(Z):D.apply(i,I)})}function Qa(i,r){let{isBrowser:t,isMix:e}=r.getGlobalObjects();if(!t&&!e||!i.customElements||!("customElements"in i))return;let n=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,i.customElements,"customElements","define",n)}function $a(i,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:e,TRUE_STR:n,FALSE_STR:a,ZONE_SYMBOL_PREFIX:h}=r.getGlobalObjects();for(let w=0;w<t.length;w++){let D=t[w],x=D+a,I=D+n,N=h+x,Z=h+I;e[D]={},e[D][a]=N,e[D][n]=Z}let v=i.EventTarget;if(!(!v||!v.prototype))return r.patchEventTarget(i,r,[v&&v.prototype]),!0}function Ka(i,r){r.patchEventPrototype(i,r)}function la(i,r,t){if(!t||t.length===0)return r;let e=t.filter(a=>a.target===i);if(e.length===0)return r;let n=e[0].ignoreProperties;return r.filter(a=>n.indexOf(a)===-1)}function Jr(i,r,t,e){if(!i)return;let n=la(i,r,t);na(i,n,e)}function rn(i){return Object.getOwnPropertyNames(i).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Ja(i,r){if(wi&&!ia||Zone[i.symbol("patchEvents")])return;let t=r.__Zone_ignore_on_properties,e=[];if(un){let n=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),Jr(n,rn(n),t,on(n))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let n=0;n<e.length;n++){let a=r[e[n]];a?.prototype&&Jr(a.prototype,rn(a.prototype),t)}}function to(i){i.__load_patch("timers",r=>{let e="clear";Ne(r,"set",e,"Timeout"),Ne(r,"set",e,"Interval"),Ne(r,"set",e,"Immediate")}),i.__load_patch("requestAnimationFrame",r=>{Ne(r,"request","cancel","AnimationFrame"),Ne(r,"mozRequest","mozCancel","AnimationFrame"),Ne(r,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(r,t)=>{let e=["alert","prompt","confirm"];for(let n=0;n<e.length;n++){let a=e[n];re(r,a,(h,v,w)=>function(D,x){return t.current.run(h,r,x,w)})}}),i.__load_patch("EventTarget",(r,t,e)=>{Ka(r,e),$a(r,e);let n=r.XMLHttpRequestEventTarget;n&&n.prototype&&e.patchEventTarget(r,e,[n.prototype])}),i.__load_patch("MutationObserver",(r,t,e)=>{We("MutationObserver"),We("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(r,t,e)=>{We("IntersectionObserver")}),i.__load_patch("FileReader",(r,t,e)=>{We("FileReader")}),i.__load_patch("on_property",(r,t,e)=>{Ja(e,r)}),i.__load_patch("customElements",(r,t,e)=>{Qa(r,e)}),i.__load_patch("XHR",(r,t)=>{D(r);let e=W("xhrTask"),n=W("xhrSync"),a=W("xhrListener"),h=W("xhrScheduled"),v=W("xhrURL"),w=W("xhrErrorBeforeScheduled");function D(x){let I=x.XMLHttpRequest;if(!I)return;let N=I.prototype;function Z(L){return L[e]}let bt=N[Ji],ct=N[tn];if(!bt){let L=x.XMLHttpRequestEventTarget;if(L){let q=L.prototype;bt=q[Ji],ct=q[tn]}}let xt="readystatechange",pt="scheduled";function T(L){let q=L.data,S=q.target;S[h]=!1,S[w]=!1;let vt=S[a];bt||(bt=S[Ji],ct=S[tn]),vt&&ct.call(S,xt,vt);let Ct=S[a]=()=>{if(S.readyState===S.DONE)if(!q.aborted&&S[h]&&L.state===pt){let Y=S[t.__symbol__("loadfalse")];if(S.status!==0&&Y&&Y.length>0){let m=L.invoke;L.invoke=function(){let l=S[t.__symbol__("loadfalse")];for(let c=0;c<l.length;c++)l[c]===L&&l.splice(c,1);!q.aborted&&L.state===pt&&m.call(L)},Y.push(L)}else L.invoke()}else!q.aborted&&S[h]===!1&&(S[w]=!0)};return bt.call(S,xt,Ct),S[e]||(S[e]=L),lt.apply(S,q.args),S[h]=!0,L}function y(){}function J(L){let q=L.data;return q.aborted=!0,z.apply(q.target,q.args)}let G=re(N,"open",()=>function(L,q){return L[n]=q[2]==!1,L[v]=q[1],G.apply(L,q)}),ot="XMLHttpRequest.send",tt=W("fetchTaskAborting"),C=W("fetchTaskScheduling"),lt=re(N,"send",()=>function(L,q){if(t.current[C]===!0||L[n])return lt.apply(L,q);{let S={target:L,url:L[v],isPeriodic:!1,args:q,aborted:!1},vt=mn(ot,y,S,T,J);L&&L[w]===!0&&!S.aborted&&vt.state===pt&&vt.invoke()}}),z=re(N,"abort",()=>function(L,q){let S=Z(L);if(S&&typeof S.type=="string"){if(S.cancelFn==null||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(t.current[tt]===!0)return z.apply(L,q)})}}),i.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&Va(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(r,t)=>{function e(n){return function(a){ca(r,n).forEach(v=>{let w=r.PromiseRejectionEvent;if(w){let D=new w(n,{promise:a.promise,reason:a.rejection});v.invoke(D)}})}}r.PromiseRejectionEvent&&(t[W("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),t[W("rejectionHandledHandler")]=e("rejectionhandled"))}),i.__load_patch("queueMicrotask",(r,t,e)=>{Ya(r,e)})}function eo(i){i.__load_patch("ZoneAwarePromise",(r,t,e)=>{let n=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function h(f){if(f&&f.toString===Object.prototype.toString){let g=f.constructor&&f.constructor.name;return(g||"")+": "+JSON.stringify(f)}return f?f.toString():Object.prototype.toString.call(f)}let v=e.symbol,w=[],D=r[v("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,x=v("Promise"),I=v("then"),N="__creationTrace__";e.onUnhandledError=f=>{if(e.showUncaughtError()){let g=f&&f.rejection;g?console.error("Unhandled Promise rejection:",g instanceof Error?g.message:g,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",g,g instanceof Error?g.stack:void 0):console.error(f)}},e.microtaskDrainDone=()=>{for(;w.length;){let f=w.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(g){bt(g)}}};let Z=v("unhandledPromiseRejectionHandler");function bt(f){e.onUnhandledError(f);try{let g=t[Z];typeof g=="function"&&g.call(this,f)}catch{}}function ct(f){return f&&typeof f.then=="function"}function xt(f){return f}function pt(f){return U.reject(f)}let T=v("state"),y=v("value"),J=v("finally"),G=v("parentPromiseValue"),ot=v("parentPromiseState"),tt="Promise.then",C=null,lt=!0,z=!1,L=0;function q(f,g){return d=>{try{et(f,g,d)}catch(b){et(f,!1,b)}}}let S=function(){let f=!1;return function(d){return function(){f||(f=!0,d.apply(null,arguments))}}},vt="Promise resolved with itself",Ct=v("currentTaskTrace");function et(f,g,d){let b=S();if(f===d)throw new TypeError(vt);if(f[T]===C){let E=null;try{(typeof d=="object"||typeof d=="function")&&(E=d&&d.then)}catch(P){return b(()=>{et(f,!1,P)})(),f}if(g!==z&&d instanceof U&&d.hasOwnProperty(T)&&d.hasOwnProperty(y)&&d[T]!==C)m(d),et(f,d[T],d[y]);else if(g!==z&&typeof E=="function")try{E.call(d,b(q(f,g)),b(q(f,!1)))}catch(P){b(()=>{et(f,!1,P)})()}else{f[T]=g;let P=f[y];if(f[y]=d,f[J]===J&&g===lt&&(f[T]=f[ot],f[y]=f[G]),g===z&&d instanceof Error){let k=t.currentTask&&t.currentTask.data&&t.currentTask.data[N];k&&a(d,Ct,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<P.length;)l(f,P[k++],P[k++],P[k++],P[k++]);if(P.length==0&&g==z){f[T]=L;let k=d;try{throw new Error("Uncaught (in promise): "+h(d)+(d&&d.stack?`
`+d.stack:""))}catch(B){k=B}D&&(k.throwOriginal=!0),k.rejection=d,k.promise=f,k.zone=t.current,k.task=t.currentTask,w.push(k),e.scheduleMicroTask()}}}return f}let Y=v("rejectionHandledHandler");function m(f){if(f[T]===L){try{let g=t[Y];g&&typeof g=="function"&&g.call(this,{rejection:f[y],promise:f})}catch{}f[T]=z;for(let g=0;g<w.length;g++)f===w[g].promise&&w.splice(g,1)}}function l(f,g,d,b,E){m(f);let P=f[T],k=P?typeof b=="function"?b:xt:typeof E=="function"?E:pt;g.scheduleMicroTask(tt,()=>{try{let B=f[y],V=!!d&&J===d[J];V&&(d[G]=B,d[ot]=P);let H=g.run(k,void 0,V&&k!==pt&&k!==xt?[]:[B]);et(d,!0,H)}catch(B){et(d,!1,B)}},d)}let c="function ZoneAwarePromise() { [native code] }",M=function(){},Q=r.AggregateError;class U{static toString(){return c}static resolve(g){return g instanceof U?g:et(new this(null),lt,g)}static reject(g){return et(new this(null),z,g)}static withResolvers(){let g={};return g.promise=new U((d,b)=>{g.resolve=d,g.reject=b}),g}static any(g){if(!g||typeof g[Symbol.iterator]!="function")return Promise.reject(new Q([],"All promises were rejected"));let d=[],b=0;try{for(let k of g)b++,d.push(U.resolve(k))}catch{return Promise.reject(new Q([],"All promises were rejected"))}if(b===0)return Promise.reject(new Q([],"All promises were rejected"));let E=!1,P=[];return new U((k,B)=>{for(let V=0;V<d.length;V++)d[V].then(H=>{E||(E=!0,k(H))},H=>{P.push(H),b--,b===0&&(E=!0,B(new Q(P,"All promises were rejected")))})})}static race(g){let d,b,E=new this((B,V)=>{d=B,b=V});function P(B){d(B)}function k(B){b(B)}for(let B of g)ct(B)||(B=this.resolve(B)),B.then(P,k);return E}static all(g){return U.allWithCallback(g)}static allSettled(g){return(this&&this.prototype instanceof U?this:U).allWithCallback(g,{thenCallback:b=>({status:"fulfilled",value:b}),errorCallback:b=>({status:"rejected",reason:b})})}static allWithCallback(g,d){let b,E,P=new this((H,rt)=>{b=H,E=rt}),k=2,B=0,V=[];for(let H of g){ct(H)||(H=this.resolve(H));let rt=B;try{H.then(at=>{V[rt]=d?d.thenCallback(at):at,k--,k===0&&b(V)},at=>{d?(V[rt]=d.errorCallback(at),k--,k===0&&b(V)):E(at)})}catch(at){E(at)}k++,B++}return k-=2,k===0&&b(V),P}constructor(g){let d=this;if(!(d instanceof U))throw new Error("Must be an instanceof Promise.");d[T]=C,d[y]=[];try{let b=S();g&&g(b(q(d,lt)),b(q(d,z)))}catch(b){et(d,!1,b)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return U}then(g,d){var b;let E=(b=this.constructor)==null?void 0:b[Symbol.species];(!E||typeof E!="function")&&(E=this.constructor||U);let P=new E(M),k=t.current;return this[T]==C?this[y].push(k,P,g,d):l(this,k,P,g,d),P}catch(g){return this.then(null,g)}finally(g){var d;let b=(d=this.constructor)==null?void 0:d[Symbol.species];(!b||typeof b!="function")&&(b=U);let E=new b(M);E[J]=J;let P=t.current;return this[T]==C?this[y].push(P,E,g,g):l(this,P,E,g,g),E}}U.resolve=U.resolve,U.reject=U.reject,U.race=U.race,U.all=U.all;let Nt=r[x]=r.Promise;r.Promise=U;let Qt=v("thenPatched");function $t(f){let g=f.prototype,d=n(g,"then");if(d&&(d.writable===!1||!d.configurable))return;let b=g.then;g[I]=b,f.prototype.then=function(E,P){return new U((B,V)=>{b.call(this,B,V)}).then(E,P)},f[Qt]=!0}e.patchThen=$t;function zt(f){return function(g,d){let b=f.apply(g,d);if(b instanceof U)return b;let E=b.constructor;return E[Qt]||$t(E),b}}if(Nt){$t(Nt);let f=Nt.try;f&&typeof f=="function"&&(U.try=f),re(r,"fetch",g=>zt(g))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=w,U})}function io(i){i.__load_patch("toString",r=>{let t=Function.prototype.toString,e=W("OriginalDelegate"),n=W("Promise"),a=W("Error"),h=function(){if(typeof this=="function"){let x=this[e];if(x)return typeof x=="function"?t.call(x):Object.prototype.toString.call(x);if(this===Promise){let I=r[n];if(I)return t.call(I)}if(this===Error){let I=r[a];if(I)return t.call(I)}}return t.call(this)};h[e]=t,Function.prototype.toString=h;let v=Object.prototype.toString,w="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?w:v.call(this)}})}function no(i,r,t,e,n){let a=Zone.__symbol__(e);if(r[a])return;let h=r[a]=r[e];r[e]=function(v,w,D){return w&&w.prototype&&n.forEach(function(x){let I=`${t}.${e}::`+x,N=w.prototype;try{if(N.hasOwnProperty(x)){let Z=i.ObjectGetOwnPropertyDescriptor(N,x);Z&&Z.value?(Z.value=i.wrapWithCurrentZone(Z.value,I),i._redefineProperty(w.prototype,x,Z)):N[x]&&(N[x]=i.wrapWithCurrentZone(N[x],I))}else N[x]&&(N[x]=i.wrapWithCurrentZone(N[x],I))}catch{}}),h.call(r,v,w,D)},i.attachOriginToPatched(r[e],h)}function ro(i){i.__load_patch("util",(r,t,e)=>{let n=rn(r);e.patchOnProperties=na,e.patchMethod=re,e.bindArguments=dn,e.patchMacroTask=Ua;let a=t.__symbol__("BLACK_LISTED_EVENTS"),h=t.__symbol__("UNPATCHED_EVENTS");r[h]&&(r[a]=r[h]),r[a]&&(t[a]=t[h]=r[a]),e.patchEventPrototype=Wa,e.patchEventTarget=Ga,e.ObjectDefineProperty=an,e.ObjectGetOwnPropertyDescriptor=Ye,e.ObjectCreate=za,e.ArraySlice=Ba,e.patchClass=We,e.wrapWithCurrentZone=ln,e.filterProperties=la,e.attachOriginToPatched=ae,e._redefineProperty=Object.defineProperty,e.patchCallbacks=no,e.getGlobalObjects=()=>({globalSources:ra,zoneSymbolEventNames:Ft,eventNames:n,isBrowser:un,isMix:ia,isNode:wi,TRUE_STR:ie,FALSE_STR:ne,ZONE_SYMBOL_PREFIX:Qe,ADD_EVENT_LISTENER_STR:sn,REMOVE_EVENT_LISTENER_STR:cn})})}function ao(i){eo(i),io(i),ro(i)}var ma=Na();ao(ma);to(ma);var Ci=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-[1536px]","mx-auto","px-4"],[1,"flex","flex-col","items-center","py-10","justify-center","mt-16","rounded-2xl","shadow-xl","relative","sm:py-16","sm:mt-20"],["src","../images/hero1.jpg","alt","ski resort image",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-4","sm:p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-center","text-4xl","sm:text-6xl"],["routerLink","/shop",1,"bg-linear-to-r","from-blue-600","to-cyan-500","font-semibold","text-lg","sm:text-2xl","text-white","rounded-2xl","px-6","sm:px-8","py-3","sm:py-4","border-2","border-transparent","mt-8"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1),X(2,"img",2),o(3,"div",3)(4,"h1",4),u(5," Welcome to SkiNet! "),s(),o(6,"button",5),u(7," Go shopping "),s()()()())},dependencies:[Ot],encapsulation:2})};function oo(i,r){if(i&1){let t=gt();o(0,"mat-card",0),X(1,"img",1),o(2,"mat-card-content",2)(3,"h2",3),u(4),s(),o(5,"p",4),u(6),Xt(7,"currency"),s()(),o(8,"mat-card-actions",5),O("click",function(n){return n.stopPropagation()}),o(9,"button",6),O("click",function(){it(t);let n=R();return nt(n.cartService.addItemToCart(n.product))}),o(10,"mat-icon"),u(11,"add_shopping_cart"),s(),o(12,"span",7),u(13,"Add to cart"),s()()()()}if(i&2){let t=R();F("routerLink",Xe("/shop/",t.product.id)),_(),F("src",te(t.product.pictureUrl),ce)("alt",te(t.product.name)),_(3),st(t.product.name),_(2),st(Gt(7,9,t.product.price)),_(3),mt("aria-label","Add "+t.product.name+" to cart")}}var Ei=class i{product;shopService=p(de);cartService=p(wt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card","h-full!",3,"routerLink"],[1,"w-full","aspect-square","object-cover","rounded-t-lg","shrink-0",3,"src","alt"],[1,"mt-2","flex-1"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"],[1,"hidden","sm:inline"]],template:function(t,e){t&1&&$(0,oo,14,11,"mat-card",0),t&2&&K(e.product?0:-1)},dependencies:[di,lr,mr,ft,Oe,Ot,me],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}@media(hover:hover){.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0000003b;cursor:pointer}}"]})};var ze=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=Lt(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Lt(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(mt("aria-orientation",n.vertical?"vertical":"horizontal"),ut("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return i})();var co=["*"],lo=`.mdc-list {
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
`,mo=["unscopedContent"];var uo=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],po=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function ho(i,r){i&1&&Zt(0,4)}function _o(i,r){if(i&1&&(o(0,"div",11),X(1,"input",12),o(2,"div",13),ni(),o(3,"svg",14),X(4,"path",15),s(),Nn(),X(5,"div",16),s()()),i&2){let t=R();ut("mdc-checkbox--disabled",t.disabled),_(),F("checked",t.selected)("disabled",t.disabled)}}function go(i,r){if(i&1&&(o(0,"div",17),X(1,"input",18),o(2,"div",19),X(3,"div",20)(4,"div",21),s()()),i&2){let t=R();ut("mdc-radio--disabled",t.disabled),_(),F("checked",t.selected)("disabled",t.disabled)}}function fo(i,r){}function bo(i,r){if(i&1&&(o(0,"span",4),Ht(1,fo,0,0,"ng-template",6),s()),i&2){R();let t=Pt(3);_(),F("ngTemplateOutlet",t)}}function vo(i,r){}function yo(i,r){if(i&1&&(o(0,"span",5),Ht(1,vo,0,0,"ng-template",6),s()),i&2){R();let t=Pt(5);_(),F("ngTemplateOutlet",t)}}function xo(i,r){}function ko(i,r){if(i&1&&Ht(0,xo,0,0,"ng-template",6),i&2){R();let t=Pt(1);F("ngTemplateOutlet",t)}}function wo(i,r){}function Co(i,r){if(i&1&&(o(0,"span",9),Ht(1,wo,0,0,"ng-template",6),s()),i&2){R();let t=Pt(3);_(),F("ngTemplateOutlet",t)}}function Eo(i,r){}function To(i,r){if(i&1&&(o(0,"span",9),Ht(1,Eo,0,0,"ng-template",6),s()),i&2){R();let t=Pt(5);_(),F("ngTemplateOutlet",t)}}function Mo(i,r){}function So(i,r){if(i&1&&Ht(0,Mo,0,0,"ng-template",6),i&2){R();let t=Pt(1);F("ngTemplateOutlet",t)}}var ua=new Vt("ListOption"),Io=(()=>{class i{_elementRef=p(Et);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Do=(()=>{class i{_elementRef=p(Et);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var pa=(()=>{class i{_listOption=p(ua,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,hostVars:4,hostBindings:function(e,n){e&2&&ut("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Po=(()=>{class i extends pa{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ri(i)))(n||i)}})();static \u0275dir=yt({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ge]})}return i})(),Ro=(()=>{class i extends pa{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ri(i)))(n||i)}})();static \u0275dir=yt({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ge]})}return i})(),Oo=new Vt("MAT_LIST_CONFIG"),pn=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Lt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Lt(t))}_disabled=Me(!1);_defaultOptions=p(Oo,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,hostVars:1,hostBindings:function(e,n){e&2&&mt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),da=(()=>{class i{_elementRef=p(Et);_ngZone=p(Jt);_listBase=p(pn,{optional:!0});_platform=p(_r);_hostElement;_isButtonElement;_noopAnimations=ke();_avatars;_icons;set lines(t){this._explicitLines=gr(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Lt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Lt(t))}_disabled=Me(!1);_subscriptions=new Ce;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p(Re).load(_i);let t=p(kr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new xr(this,this._ngZone,this._hostElement,this._platform,p(Te)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ee(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,contentQueries:function(e,n,a){if(e&1&&De(a,Po,4)(a,Ro,4),e&2){let h;It(h=Dt())&&(n._avatars=h),It(h=Dt())&&(n._icons=h)}},hostVars:4,hostBindings:function(e,n){e&2&&(mt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),ut("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var ha=new Vt("SelectionList"),$e=(()=>{class i extends da{_selectionList=p(ha);_changeDetectorRef=p(ee);_lines;_titles;_unscopedContent;selectedChange=new Kt;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(t){this.togglePosition=t}get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=Lt(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(n=>t.compareWith(this._value,n))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected("icons",t)||this._hasProjected("avatars",t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute("tabindex",t+"")}_hasBothLeadingAndTrailing(){let t=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),e=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return t&&e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ri(i)))(n||i)}})();static \u0275cmp=j({type:i,selectors:[["mat-list-option"]],contentQueries:function(e,n,a){if(e&1&&De(a,Do,5)(a,Io,5),e&2){let h;It(h=Dt())&&(n._lines=h),It(h=Dt())&&(n._titles=h)}},viewQuery:function(e,n){if(e&1&&si(mo,5),e&2){let a;It(a=Dt())&&(n._unscopedContent=a.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(e,n){e&1&&O("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),e&2&&(mt("aria-selected",n.selected),ut("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[Ge([{provide:da,useExisting:i},{provide:ua,useExisting:i}]),ge],ngContentSelectors:po,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(e,n){e&1&&(Ie(uo),Ht(0,ho,1,0,"ng-template",null,0,li)(2,_o,6,4,"ng-template",null,1,li)(4,go,5,4,"ng-template",null,2,li),$(6,bo,2,1,"span",4)(7,yo,2,1,"span",5),$(8,ko,1,1,null,6),o(9,"span",7),Zt(10),Zt(11,1),o(12,"span",8,3),O("cdkObserveContent",function(){return n._updateItemLines(!0)}),Zt(14,2),s()(),$(15,Co,2,1,"span",9)(16,To,2,1,"span",9),$(17,So,1,1,null,6),Zt(18,3),X(19,"div",10)),e&2&&(_(6),K(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),_(2),K(n._hasIconsOrAvatarsAt("before")?8:-1),_(7),K(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),_(2),K(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[Jn,fr],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
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
`],encapsulation:2,changeDetection:0})}return i})();var Lo={provide:Or,useExisting:Fn(()=>Ke),multi:!0},hn=class{source;options;constructor(r,t){this.source=r,this.options=t}},Ke=(()=>{class i extends pn{_element=p(Et);_ngZone=p(Jt);_renderer=p(le);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new se;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new Kt;color="accent";compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=Lt(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new $i(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=Lt(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new $i(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=p(ee);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,n=t.disableRipple,a=t.hideSingleSelectionIndicator;(n&&!n.firstChange||e&&!e.firstChange||a&&!a.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new hn(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(Lt(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=Me(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Ze(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let n=this.options.find(a=>a.selected?!1:this.compareWith(a.value,e));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let n=[];return this.options.forEach(a=>{(!e||!a.disabled)&&a._setSelected(t)&&n.push(a)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&ui(t,"ctrlKey","metaKey")){let n=this.options.some(a=>!a.disabled&&!a.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{if(this.disabled)return;let e=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new pi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(Ze(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,n)=>e._setTabindex(n===t?0:-1)),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=hr();return t&&this._element.nativeElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["mat-selection-list"]],contentQueries:function(e,n,a){if(e&1&&De(a,$e,5),e&2){let h;It(h=Dt())&&(n._items=h)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(e,n){e&1&&O("keydown",function(h){return n._handleKeydown(h)}),e&2&&mt("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[Ge([Lo,{provide:pn,useExisting:i},{provide:ha,useExisting:i}]),ge,jn],ngContentSelectors:co,decls:1,vars:0,template:function(e,n){e&1&&(Ie(),Zt(0))},styles:[lo],encapsulation:2,changeDetection:0})}return i})();function Ao(i,r){if(i&1&&(o(0,"mat-list-option",5),u(1),s()),i&2){let t=r.$implicit;F("value",t),_(),st(t)}}function Fo(i,r){if(i&1&&(o(0,"mat-list-option",5),u(1),s()),i&2){let t=r.$implicit;F("value",t),_(),st(t)}}var Si=class i{shopService=p(de);dialogRef=p(Dr);data=p(Pr);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({brandsSelected:this.selectedBrands,typesSelected:this.selectedTypes})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-filters-dialog"]],decls:20,vars:4,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","flex-col","p-4","sm:flex-row"],[1,"w-full","sm:w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&(o(0,"div")(1,"h3",0),u(2,"Filters"),s(),X(3,"mat-divider"),o(4,"div",1)(5,"div",2)(6,"h4",3),u(7,"Brands"),s(),o(8,"mat-selection-list",4),xe("ngModelChange",function(a){return ye(e.selectedBrands,a)||(e.selectedBrands=a),a}),Mt(9,Ao,2,2,"mat-list-option",5,fe),s()(),o(11,"div",2)(12,"h4",3),u(13,"Types"),s(),o(14,"mat-selection-list",4),xe("ngModelChange",function(a){return ye(e.selectedTypes,a)||(e.selectedTypes=a),a}),Mt(15,Fo,2,2,"mat-list-option",5,fe),s()()(),o(17,"div",6)(18,"button",7),O("click",function(){return e.applyFilters()}),u(19,"Apply Filters"),s()()()),t&2&&(_(8),ve("ngModel",e.selectedBrands),F("multiple",!0),_(),St(e.shopService.brands),_(5),ve("ngModel",e.selectedTypes),F("multiple",!0),_(),St(e.shopService.types))},dependencies:[ze,Ke,$e,Oe,Fe,Le,Ae],encapsulation:2})};var jo=["mat-menu-item",""],Vo=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ho=["mat-icon, [matMenuItemIcon]","*"];function Zo(i,r){i&1&&(ni(),o(0,"svg",2),X(1,"polygon",3),s())}var qo=["*"];function Uo(i,r){if(i&1){let t=gt();be(0,"div",0),Yn("click",function(){it(t);let n=R();return nt(n.closed.emit("click"))})("animationstart",function(n){it(t);let a=R();return nt(a._onAnimationStart(n.animationName))})("animationend",function(n){it(t);let a=R();return nt(a._onAnimationDone(n.animationName))})("animationcancel",function(n){it(t);let a=R();return nt(a._onAnimationDone(n.animationName))}),be(1,"div",1),Zt(2),Se()()}if(i&2){let t=R();ci(t._classList),ut("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Wn("id",t.panelId),mt("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var bn=new Vt("MAT_MENU_PANEL"),Je=(()=>{class i{_elementRef=p(Et);_document=p(qe);_focusMonitor=p(Qi);_parentMenu=p(bn,{optional:!0});_changeDetectorRef=p(ee);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new se;_focused=new se;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(Re).load(_i),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&O("click",function(h){return n._checkDisabled(h)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(mt("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),ut("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Wt],disableRipple:[2,"disableRipple","disableRipple",Wt]},exportAs:["matMenuItem"],attrs:jo,ngContentSelectors:Ho,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(Ie(Vo),Zt(0),o(1,"span",0),Zt(2,1),s(),X(3,"div",1),$(4,Zo,2,0,":svg:svg",2)),e&2&&(_(3),F("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),_(),K(n._triggersSubmenu?4:-1))},dependencies:[wr],encapsulation:2,changeDetection:0})}return i})();var Xo=new Vt("MatMenuContent");var Go=new Vt("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),fn="_mat-menu-enter",Ii="_mat-menu-exit",pe=(()=>{class i{_elementRef=p(Et);_changeDetectorRef=p(ee);_injector=p(Te);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ke();_allItems;_directDescendantItems=new Vn;_classList={};_panelAnimationState="void";_animationDone=new se;_isAnimating=Me(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=Ui({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Kt;close=this.closed;panelId=p(hi).getId("mat-menu-panel-");constructor(){let t=p(Go);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new pi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ei(this._directDescendantItems),Xi(t=>Ee(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),a=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[a]&&!n[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ei(this._directDescendantItems),Xi(e=>Ee(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:ui(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Zn(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Cn(Ui({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ii;(e||t===fn)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===fn||t===Ii)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ii),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?fn:Ii)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ei(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,a){if(e&1&&De(a,Xo,5)(a,Je,5)(a,Je,4),e&2){let h;It(h=Dt())&&(n.lazyContent=h.first),It(h=Dt())&&(n._allItems=h),It(h=Dt())&&(n.items=h)}},viewQuery:function(e,n){if(e&1&&si(ai,5),e&2){let a;It(a=Dt())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(e,n){e&2&&mt("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Wt],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Wt(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ge([{provide:bn,useExisting:i}])],ngContentSelectors:qo,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(Ie(),Xn(0,Uo,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),Wo=new Vt("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=p(Te);return()=>Tr(i)}});var Be=new WeakMap,Yo=(()=>{class i{_canHaveBackdrop;_element=p(Et);_viewContainerRef=p(oi);_menuItemInstance=p(Je,{optional:!0,self:!0});_dir=p(cr,{optional:!0});_focusMonitor=p(Qi);_ngZone=p(Jt);_injector=p(Te);_scrollStrategy=p(Wo);_changeDetectorRef=p(ee);_animationsDisabled=ke();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ce.EMPTY;_menuCloseSubscription=Ce.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=p(bn,{optional:!0});this._parentMaterialMenu=e instanceof pe?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Be.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=Be.get(e);Be.set(e,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(e),h=a.getConfig(),v=h.positionStrategy;this._setPosition(e,v),this._canHaveBackdrop?h.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:h.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof pe&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Ze(e.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof pe&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Rn(1)).subscribe(()=>{e.detach(),Be.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Be.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Ir(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof pe&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Mr({positionStrategy:Sr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",h=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,h)})})}_setPosition(t,e){let[n,a]=t.xPosition==="before"?["end","start"]:["start","end"],[h,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[w,D]=[h,v],[x,I]=[n,a],N=0;if(this._triggersSubmenu()){if(I=n=t.xPosition==="before"?"start":"end",a=x=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Z=this._parentMaterialMenu.items.first;this._parentInnerPadding=Z?Z._getHostElement().offsetTop:0}N=h==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(w=h==="top"?"bottom":"top",D=v==="top"?"bottom":"top");e.withPositions([{originX:n,originY:w,overlayX:x,overlayY:h,offsetY:N},{originX:a,originY:w,overlayX:I,overlayY:h,offsetY:N},{originX:n,originY:D,overlayX:x,overlayY:v,offsetY:-N},{originX:a,originY:D,overlayX:I,overlayY:v,offsetY:-N}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:He(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(In(h=>this._menuOpen&&h!==this._menuItemInstance)):He();return Ee(t,n,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Er(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Be.get(t)===this}_triggerIsAriaDisabled(){return Wt(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Un()};static \u0275dir=yt({type:i})}return i})(),Di=(()=>{class i extends Yo{_cleanupTouchstart;_hoverSubscription=Ce.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Kt;onMenuOpen=this.menuOpened;menuClosed=new Kt;onMenuClose=this.menuClosed;constructor(){super(!0);let t=p(le);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{pr(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){ur(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&O("click",function(h){return n._handleClick(h)})("mousedown",function(h){return n._handleMousedown(h)})("keydown",function(h){return n._handleKeydown(h)}),e&2&&mt("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ge]})}return i})();var he=class i{loading=!1;busyRequestCount=0;busy(){this.busyRequestCount++,this.loading=!0}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ii({token:i,factory:i.\u0275fac,providedIn:"root"})};function Qo(i,r){if(i&1){let t=gt();o(0,"div",0)(1,"div",1)(2,"mat-icon",2),u(3),s(),o(4,"p",3),u(5),s(),o(6,"button",4),O("click",function(){it(t);let n=R();return nt(n.onAction())}),u(7),s()()()}if(i&2){let t=R();_(3),st(t.icon()),_(2),_t(" ",t.message()," "),_(2),st(t.actionText())}}var je=class i{busyService=p(he);message=Pe.required();icon=Pe.required();actionText=Pe.required();action=$n();onAction(){this.action.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-empty-state"]],inputs:{message:[1,"message"],icon:[1,"icon"],actionText:[1,"actionText"]},outputs:{action:"action"},decls:1,vars:1,consts:[[1,"max-w-7xl","mx-auto","px-4","sm:px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-display","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&$(0,Qo,8,3,"div",0),t&2&&K(e.busyService.busyRequestCount===0?0:-1)},dependencies:[ft,kt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var $o=(i,r)=>r.id;function Ko(i,r){if(i&1&&X(0,"app-product-item",14),i&2){let t=r.$implicit;F("product",t)}}function Jo(i,r){if(i&1&&(o(0,"mat-list-option",16),u(1),s()),i&2){let t=r.$implicit,e=R(2);F("value",t.value)("selected",e.shopParams.sort===t.value),_(),_t(" ",t.name," ")}}function ts(i,r){if(i&1){let t=gt();o(0,"div",4)(1,"div",5)(2,"mat-paginator",6),O("page",function(n){it(t);let a=R();return nt(a.handlePageEvent(n))}),s(),o(3,"form",7,0)(5,"input",8),xe("ngModelChange",function(n){it(t);let a=R();return ye(a.shopParams.search,n)||(a.shopParams.search=n),nt(n)}),O("ngModelChange",function(){it(t);let n=R();return nt(n.onSearchChange())}),s(),o(6,"mat-icon",9),u(7,"search"),s()(),o(8,"div",10)(9,"button",11),O("click",function(){it(t);let n=R();return nt(n.openFiltersDialog())}),o(10,"mat-icon"),u(11,"filter_list"),s(),u(12," Filters "),s(),o(13,"button",12)(14,"mat-icon"),u(15,"swap_vert"),s(),u(16," Sort "),s()()(),o(17,"div",13),Mt(18,Ko,1,1,"app-product-item",14,$o),s()(),o(20,"mat-menu",null,1)(22,"mat-selection-list",15,2),O("selectionChange",function(n){it(t);let a=R();return nt(a.onSortChange(n))}),Mt(24,Jo,2,3,"mat-list-option",16,fe),s()()}if(i&2){let t=Pt(21),e=R();_(2),F("pageIndex",e.shopParams.pageNumber-1)("pageSize",e.shopParams.pageSize)("length",e.products.count)("pageSizeOptions",e.pageSizeOptions)("showFirstLastButtons",!0),_(3),ve("ngModel",e.shopParams.search),_(8),F("matMenuTriggerFor",t),_(5),St(e.products.data),_(4),F("multiple",!1),_(2),St(e.sortOptions)}}function es(i,r){if(i&1){let t=gt();o(0,"app-empty-state",17),O("action",function(){it(t);let n=R();return nt(n.resetFilters())}),s()}}var Pi=class i{shopService=p(de);dialogService=p(Rr);products;shopParams=new Ki;pageSizeOptions=[5,10,15,20];sortOptions=[{name:"Alphabetical",value:"name"},{name:"Low-High",value:"priceAsc"},{name:"High-Low",value:"priceDesc"}];ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new Ki,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:r=>this.products=r,error:r=>console.log(r)})}handlePageEvent(r){this.shopParams.pageNumber=r.pageIndex+1,this.shopParams.pageSize=r.pageSize,this.getProducts()}searchTerms=new se;constructor(){this.searchTerms.pipe(Pn(400),Hr()).subscribe(()=>{this.shopParams.pageNumber=1,this.getProducts()})}onSearchChange(){this.searchTerms.next(this.shopParams.search)}onSortChange(r){let t=r.options[0];t&&(this.shopParams.sort=t.value,this.shopParams.pageNumber=1,this.getProducts())}openFiltersDialog(){this.dialogService.open(Si,{width:"min(500px, 95vw)",maxWidth:"95vw",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(this.shopParams.brands=t.brandsSelected,this.shopParams.types=t.typesSelected,this.shopParams.pageNumber=1,this.getProducts())}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-shop"]],decls:2,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],["sortList",""],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-3","lg:flex-row","lg:items-center","lg:justify-between"],["aria-label","Select page",3,"page","pageIndex","pageSize","length","pageSizeOptions","showFirstLastButtons"],[1,"relative","flex","w-full","items-center","lg:mx-4","lg:max-w-md"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-3","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:border-blue-500",3,"ngModelChange","ngModel"],[1,"absolute","right-3","top-3","text-gray-500"],[1,"flex","w-full","gap-2","lg:w-auto","lg:gap-3"],["mat-stroked-button","",3,"click"],["mat-stroked-button","",3,"matMenuTriggerFor"],[1,"grid","grid-cols-2","gap-3","sm:grid-cols-3","sm:gap-4","md:grid-cols-4","xl:grid-cols-5"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"],["message","No products match this filter","icon","filter_alt_off","actionText","Reset filters",3,"action"]],template:function(t,e){t&1&&$(0,ts,26,8)(1,es,1,0,"app-empty-state",3),t&2&&K(e.products&&e.products.count>0?0:1)},dependencies:[Ei,kt,ft,pe,Ke,$e,Di,Vr,Fe,Fr,fi,Le,Lr,Ae,Ar,je],encapsulation:2})};function is(i,r){if(i&1){let t=gt();o(0,"section",0)(1,"div",1)(2,"div",2)(3,"button",3)(4,"mat-icon"),u(5,"arrow_back"),s(),u(6," Back to shop "),s()(),o(7,"div",4)(8,"div",5),X(9,"img",6),s(),o(10,"div")(11,"h1",7),u(12),s(),o(13,"p"),u(14),s(),o(15,"div",8)(16,"p",9),u(17),Xt(18,"currency"),s()(),o(19,"div",10)(20,"button",11),O("click",function(){it(t);let n=R();return nt(n.updateCart())}),o(21,"mat-icon"),u(22,"shopping_cart"),s(),u(23),s(),o(24,"mat-form-field",12)(25,"mat-label"),u(26,"Quantity"),s(),o(27,"input",13),xe("ngModelChange",function(n){it(t);let a=R();return ye(a.quantity,n)||(a.quantity=n),nt(n)}),s()()(),o(28,"div",14),u(29),s(),X(30,"mat-divider"),o(31,"p",15),u(32),s()()()()()}if(i&2){let t=R();_(9),F("src",te(t.product.pictureUrl),ce),_(3),st(t.product.name),_(2),_t("You have ",t.quantityInCart," of this item in your cart"),_(3),_t(" ",Gt(18,10,t.product.price)," "),_(3),F("disabled",t.quantity===t.quantityInCart),_(3),_t(" ",t.getButtonText()," "),_(4),ve("ngModel",t.quantity),_(2),_t(" Quantity in stock: ",t.product.quantityInStock," "),_(3),_t(" ",t.product.description," ")}}var Ri=class i{shopSerive=p(de);activatedRoute=p(rr);product;cartService=p(wt);quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let r=this.activatedRoute.snapshot.paramMap.get("id");r&&this.shopSerive.getProduct(+r).subscribe({next:t=>{this.product=t,this.updateQuantityInBasket()},error:t=>console.log(t)})}updateQuantityInBasket(){this.quantityInCart=this.cartService.cart()?.items.find(r=>r.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let r=this.quantity-this.quantityInCart;this.quantityInCart+=r,this.cartService.addItemToCart(this.product,r)}else{let r=this.quantityInCart-this.quantity;this.quantityInCart-=r,this.cartService.removeItemFromCart(this.product.id,r)}}getButtonText(){return this.quantityInCart>0?"Update Cart":"Add to Cart"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-[1536px]","px-4","mx-auto"],[1,"flex","justify-end","mb-4"],["mat-stroked-button","","routerLink","/shop"],[1,"grid","grid-cols-1","gap-4","lg:grid-cols-2","lg:gap-8"],[1,"max-w-xl","mx-auto","overflow-hidden","rounded-lg"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","flex-wrap","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],[1,"flex","items-center","align-middle","mb-3"],[1,"mt-6","text-gray-500"]],template:function(t,e){t&1&&$(0,is,33,12,"section",0),t&2&&K(e.product?0:-1)},dependencies:[kt,Zr,ft,jr,Br,ze,Fe,fi,Nr,Le,zr,Ae,Ot,me],styles:[".max-w-xl[_ngcontent-%COMP%]{max-width:545px}.ring-amber-50[_ngcontent-%COMP%]{background-color:#faf9fd}"]})};function ns(i,r){if(i&1&&(o(0,"li",4),u(1),s()),i&2){let t=r.$implicit;_(),st(t)}}function rs(i,r){if(i&1&&(o(0,"div",2)(1,"ul",3),Mt(2,ns,2,1,"li",4,fe),s()()),i&2){let t=R();_(2),St(t.modelStateError)}}var Oi=class i{baseUrl=mi.apiUrl;http=p(er);modelStateError;get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:r=>console.log(r),error:r=>this.modelStateError=r})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","flex-wrap","justify-center","gap-2","sm:gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"button",1),O("click",function(){return e.get500Error()}),u(2,"Test 500 error"),s(),o(3,"button",1),O("click",function(){return e.get404Error()}),u(4,"Test 404 error"),s(),o(5,"button",1),O("click",function(){return e.get400Error()}),u(6,"Test 400 error"),s(),o(7,"button",1),O("click",function(){return e.get401Error()}),u(8,"Test 401 error"),s(),o(9,"button",1),O("click",function(){return e.get400ValidationError()}),u(10,"Test validation error"),s()(),$(11,rs,4,0,"div",2)),t&2&&(_(11),K(e.modelStateError?11:-1))},dependencies:[kt],encapsulation:2})};var Li=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","justify-center","items-center","bg-gray-100","min-h-96","px-4"],[1,"text-center"],[1,"text-blue-800!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-5"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"mat-icon",2),u(3,"error-outline"),s(),o(4,"h1",3),u(5,"404"),s(),o(6,"p",4),u(7,"Page not found"),s(),o(8,"button",5),u(9,"Back to shop"),s()()())},dependencies:[ft,Ot,Oe],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function as(i,r){if(i&1&&(o(0,"h5",2),u(1),s(),o(2,"p",3),u(3,"This error comes from the server, not Angular"),s(),o(4,"p",4),u(5,"What to do next?"),s(),o(6,"ol",5)(7,"li",6),u(8,"Check the network tab in chrome dev tools"),s(),o(9,"li",6),u(10,"Reproduce the error in postman. If same error, don't waste time troubleshooting angular code"),s()(),o(11,"h5",7),u(12," Stack trace"),s(),o(13,"mat-card",8)(14,"code",9),u(15),s()()),i&2){let t=R();_(),_t("Error: ",t.error.message),_(14),st(t.error.details)}}var Ai=class i{constructor(r){this.router=r;let t=this.router.currentNavigation();this.error=t?.extras.state?.error}error;static \u0275fac=function(t){return new(t||i)(qn(Rt))};static \u0275cmp=j({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"mt-5","p-4","bg-gray-100","rounded","shadow-lg","break-words"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"h1",1),u(2,"Internal server error"),s(),$(3,as,16,2),s()),t&2&&(_(3),K(e.error?3:-1))},dependencies:[di],encapsulation:2})};var Fi=class i{cartService=p(wt);item=Pe.required();incrementQuantity(){this.cartService.addItemToCart(this.item(),1,!1)}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:27,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","flex-wrap","items-center","justify-between","gap-3","lg:gap-6"],[1,"shrink-0","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20","object-cover","rounded",3,"src"],[1,"order-2","min-w-0","flex-1","space-y-2","lg:max-w-md"],[1,"font-medium","block",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!","flex","gap-2","items-center",3,"click"],[1,"order-3","flex","w-full","items-center","justify-between","gap-3","lg:w-auto","lg:gap-6"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","w-24","lg:w-32"],[1,"font-bold","text-xl","text-gray-900!"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),X(3,"img",3),s(),o(4,"div",4)(5,"a",5),u(6),s(),o(7,"div",6)(8,"button",7),O("click",function(){return e.removeItemFromCart()}),o(9,"mat-icon"),u(10,"delete"),s(),o(11,"span"),u(12,"Delete"),s()()()(),o(13,"div",8)(14,"div",9)(15,"button",10),O("click",function(){return e.decrementQuantity()}),o(16,"mat-icon",11),u(17,"remove"),s()(),o(18,"div",12),u(19),s(),o(20,"button",10),O("click",function(){return e.incrementQuantity()}),o(21,"mat-icon",13),u(22,"add"),s()()(),o(23,"div",14)(24,"p",15),u(25),Xt(26,"currency"),s()()()()()),t&2&&(_(2),F("routerLink",Xe("/shop/",e.item().productId)),_(),F("src",te(e.item().pictureUrl),ce),_(2),F("routerLink",Xe("/shop/",e.item().productId)),_(),_t(" ",e.item().productName," "),_(13),_t(" ",e.item().quantity),_(6),st(Gt(26,9,e.item().price)))},dependencies:[Ot,ft,kt,gi,me],encapsulation:2})};var os=(i,r)=>r.productId;function ss(i,r){if(i&1&&X(0,"app-cart-item",3),i&2){let t=r.$implicit;F("item",t)}}function cs(i,r){if(i&1&&(o(0,"div",0)(1,"div",2),Mt(2,ss,1,1,"app-cart-item",3,os),s(),o(4,"div",4),X(5,"app-order-summary"),s()()),i&2){let t,e=R();_(2),St((t=e.cartService.cart())==null?null:t.items)}}function ls(i,r){if(i&1){let t=gt();o(0,"app-empty-state",5),O("action",function(){it(t);let n=R();return nt(n.onAction())}),s()}}var Ni=class i{router=p(Rt);cartService=p(wt);onAction(){this.router.navigateByUrl("/shop")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","flex-col","items-start","gap-6","lg:flex-row"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop"],[1,"w-full","lg:w-3/4"],[3,"item"],[1,"w-full","lg:w-1/4"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop",3,"action"]],template:function(t,e){t&1&&(o(0,"section"),$(1,cs,6,0,"div",0)(2,ls,1,0,"app-empty-state",1),s()),t&2&&(_(),K(e.cartService.cart()?1:2))},dependencies:[Fi,Ur,je],encapsulation:2})};var ba=()=>{let i=p(ue),r=p(Rt),t=p(bi);return i.isAdmin()?!0:(t.error("Request denied; You are not an admin."),r.createUrlTree(["/shop"]))};var va=[{path:"",component:Ci},{path:"shop",component:Pi},{path:"shop/:id",component:Ri},{path:"cart",component:Ni},{path:"checkout",loadChildren:()=>import("./chunk-WUXI4OQE.js").then(i=>i.checkoutRoutes)},{path:"orders",loadChildren:()=>import("./chunk-V4GOMD3A.js").then(i=>i.orderRoutes)},{path:"account",loadChildren:()=>import("./chunk-LRO2GCVJ.js").then(i=>i.accountRoutes)},{path:"test-error",component:Oi},{path:"not-found",component:Li},{path:"server-error",component:Ai},{path:"admin",canActivate:[Xr],children:[{path:"",loadComponent:()=>import("./chunk-2BZGME4M.js").then(i=>i.Admin),canActivate:[ba]}]},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var ya=(i,r)=>{let t=p(Rt),e=p(bi);return r(i).pipe(Dn(n=>{if(n.status===400)if(n.error.errors){let a=[];for(let h in n.error.errors)n.error.errors[h]&&a.push(n.error.errors[h]);throw a.flat()}else e.error(n.error.title||n.error);if(n.status===401&&!i.url.endsWith("/login")&&e.error(n.error.title||n.error),n.status===403&&e.error("Forbidden"),n.status===404&&t.navigateByUrl("/not-found"),n.status===500){let a={state:{error:n.error}};t.navigateByUrl("/server-error",a)}return Tn(()=>n)}))};var xa=(i,r)=>{let t=p(he);return t.busy(),r(i).pipe(mi.production?En:On(500),Ln(()=>t.idle()))};var zi=class i{cartService=p(wt);accountService=p(ue);signalrService=p(qr);init(){let r=localStorage.getItem("cart_id"),t=r?this.cartService.getCart(r):He(null);return Sn({cart:t,user:this.accountService.getUserInfo().pipe(An(e=>{e&&this.signalrService.createHubConnection()}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ii({token:i,factory:i.\u0275fac,providedIn:"root"})};var ka=(i,r)=>{let t=i.clone({withCredentials:!0});return r(t)};var wa={providers:[zn(),sr(va),Kn(),Gn(async()=>{let i=p(zi);return Mn(i.init()).finally(()=>{let r=document.getElementById("initial-splash");r&&r.remove()})}),ir(nr([ya,xa,ka]))]};var Ca="mat-badge-content",ms=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ea=(()=>{class i{_ngZone=p(Jt);_elementRef=p(Et);_ariaDescriber=p(vr);_renderer=p(le);_animationsDisabled=ke();_idGenerator=p(hi);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(br);_document=p(qe);constructor(){let t=p(Re);t.load(ms),t.load(dr)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Ca),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Ca}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=yt({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&ut("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Wt],disabled:[2,"matBadgeDisabled","disabled",Wt],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Wt]}})}return i})();function ds(i,r){i&1&&Ue(0,"div",2)}var us=new Vt("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ma=(()=>{class i{_elementRef=p(Et);_ngZone=p(Jt);_changeDetectorRef=p(ee);_renderer=p(le);_cleanupTransitionEnd;constructor(){let t=yr(),e=p(us,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=Ta(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Ta(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Kt;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(e,n){e&2&&(mt("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),ci("mat-"+n.color),ut("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Yi],bufferValue:[2,"bufferValue","bufferValue",Yi],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,n){e&1&&(be(0,"div",0),Ue(1,"div",1),$(2,ds,1,0,"div",2),Se(),be(3,"div",3),Ue(4,"span",4),Se(),be(5,"div",5),Ue(6,"span",4),Se()),e&2&&(_(),Gi("flex-basis",n._getBufferBarFlexBasis()),_(),K(n.mode==="buffer"?2:-1),_(),Gi("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return i})();function Ta(i,r=0,t=100){return Math.max(r,Math.min(t,i))}var Bi=class i{accountService=p(ue);viewContainerRef=p(oi);templateRef=p(ai);constructor(){Bn(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=yt({type:i,selectors:[["","appIsAdmin",""]]})};var Sa=()=>({exact:!0});function ps(i,r){i&1&&(o(0,"a",25),u(1,"Admin"),s())}function hs(i,r){if(i&1&&(o(0,"div",26)(1,"button",27)(2,"mat-icon"),u(3,"arrow_drop_down"),s(),o(4,"span"),u(5),s()()(),o(6,"div",13)(7,"button",28)(8,"mat-icon"),u(9,"account_circle"),s()()()),i&2){let t,e=R(),n=Pt(24);_(),F("matMenuTriggerFor",n),_(4),st((t=e.accountService.currentUser())==null?null:t.email),_(2),F("matMenuTriggerFor",n)}}function _s(i,r){i&1&&(o(0,"div",12)(1,"button",29),u(2,"Sign in"),s()())}function gs(i,r){i&1&&(o(0,"a",30)(1,"mat-icon"),u(2,"admin_panel_settings"),s(),u(3," Admin "),s())}function fs(i,r){if(i&1){let t=gt();o(0,"button",18)(1,"mat-icon"),u(2,"shopping_cart"),s(),u(3," My cart "),s(),o(4,"button",19)(5,"mat-icon"),u(6,"history"),s(),u(7," View Orders "),s(),o(8,"button",20),O("click",function(){it(t);let n=R();return nt(n.logout())}),o(9,"mat-icon"),u(10,"logout"),s(),u(11," Logout "),s()}}function bs(i,r){i&1&&(o(0,"button",24)(1,"mat-icon"),u(2,"login"),s(),u(3," Sign in "),s())}var ji=class i{busyService=p(he);cartService=p(wt);accountService=p(ue);router=p(Rt);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-header"]],decls:52,vars:11,consts:[["accountMenu","matMenu"],["mobileMenu","matMenu"],[1,"fixed","top-0","z-50","w-full","bg-white","shadow-md"],[1,"mx-auto","flex","h-16","max-w-[1536px]","items-center","justify-between","gap-2","px-4","lg:h-20","lg:px-6"],["routerLink","/","src","images/logo.png","alt","app logo",1,"max-h-10","lg:max-h-16"],[1,"hidden","gap-3","uppercase","text-xl","lg:flex","lg:my-2"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],[1,"flex","items-center","gap-2","lg:gap-4"],["routerLink","/cart","routerLinkActive","active","aria-label","My cart",1,"custom-badge","lg:mt-2",3,"matBadge"],[1,"hidden","lg:flex"],[1,"lg:hidden"],["mat-icon-button","","aria-label","Open menu",3,"matMenuTriggerFor"],[1,"absolute","bottom-0","left-0","w-full"],["mode","indeterminate"],[1,"px-3"],["mat-menu-item","","routerLink","/cart"],["mat-menu-item","","routerLink","/orders"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-menu-item","","routerLink","/shop","routerLinkActive","active"],["mat-menu-item","","routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],["mat-menu-item","","routerLink","account/login"],["routerLink","/admin","routerLinkActive","active"],[1,"hidden","lg:block"],["mat-button","",3,"matMenuTriggerFor"],["mat-icon-button","","aria-label","Account",3,"matMenuTriggerFor"],["routerLink","account/login","mat-stroked-button",""],["mat-menu-item","","routerLink","/admin","routerLinkActive","active"]],template:function(t,e){if(t&1&&(o(0,"header",2)(1,"div",3),X(2,"img",4),o(3,"nav",5)(4,"a",6),u(5,"Home"),s(),o(6,"a",7),u(7,"Shop"),s(),o(8,"a",8),u(9,"Errors"),s(),Ht(10,ps,2,0,"a",9),s(),o(11,"div",10)(12,"a",11)(13,"mat-icon"),u(14,"shopping_cart"),s()(),$(15,hs,10,3)(16,_s,3,0,"div",12),o(17,"div",13)(18,"button",14)(19,"mat-icon"),u(20,"menu"),s()()()()(),o(21,"div",15),X(22,"mat-progress-bar",16),s()(),o(23,"mat-menu",17,0)(25,"button",18)(26,"mat-icon"),u(27,"shopping_cart"),s(),u(28," My cart "),s(),o(29,"button",19)(30,"mat-icon"),u(31,"history"),s(),u(32," View Orders "),s(),X(33,"mat-divider"),o(34,"button",20),O("click",function(){return e.logout()}),o(35,"mat-icon"),u(36,"logout"),s(),u(37," Logout "),s()(),o(38,"mat-menu",null,1)(40,"a",21)(41,"mat-icon"),u(42,"home"),s(),u(43," Home "),s(),o(44,"a",22)(45,"mat-icon"),u(46,"storefront"),s(),u(47," Shop "),s(),Ht(48,gs,4,0,"a",23),X(49,"mat-divider"),$(50,fs,12,0)(51,bs,4,0,"button",24),s()),t&2){let n=Pt(39);_(4),F("routerLinkActiveOptions",Wi(9,Sa)),_(8),F("matBadge",te(e.cartService.itemCount())),_(3),K(e.accountService.currentUser()?15:16),_(3),F("matMenuTriggerFor",n),_(4),ut("invisible",!e.busyService.loading),_(18),F("routerLinkActiveOptions",Wi(10,Sa)),_(10),K(e.accountService.currentUser()?50:51)}},dependencies:[ft,Ea,kt,Ot,or,Ma,pe,Di,ze,Je,Bi],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}"]})};var vs=(i,r)=>r.productId;function ys(i,r){if(i&1){let t=gt();o(0,"div",13)(1,"div",14),X(2,"img",15),o(3,"div",16)(4,"p",17),u(5),s(),o(6,"p",18),u(7),Xt(8,"currency"),s()(),o(9,"button",19),O("click",function(){let n=it(t).$implicit,a=R(2);return nt(a.removeItem(n))}),o(10,"mat-icon"),u(11,"delete"),s()()(),o(12,"div",20)(13,"div",21)(14,"button",22),O("click",function(){let n=it(t).$implicit,a=R(2);return nt(a.decrement(n))}),o(15,"mat-icon",23),u(16,"remove"),s()(),o(17,"span",24),u(18),s(),o(19,"button",22),O("click",function(){let n=it(t).$implicit,a=R(2);return nt(a.increment(n))}),o(20,"mat-icon",25),u(21,"add"),s()()(),o(22,"p",26),u(23),Xt(24,"currency"),s()()()}if(i&2){let t=r.$implicit;_(2),F("src",t.pictureUrl,ce)("alt",t.productName),_(3),st(t.productName),_(2),_t("",Gt(8,9,t.price)," each"),_(2),mt("aria-label","Remove "+t.productName+" from basket"),_(5),mt("aria-label","Decrease quantity of "+t.productName),_(4),st(t.quantity),_(),mt("aria-label","Increase quantity of "+t.productName),_(4),st(Gt(24,11,t.price*t.quantity))}}function xs(i,r){if(i&1&&Mt(0,ys,25,13,"div",13,vs),i&2){let t,e=R();St((t=e.cartService.cart())==null?null:t.items)}}function ks(i,r){i&1&&(o(0,"p",6),u(1,"Your basket is empty."),s())}var Vi=class i{cartService=p(wt);miniCartService=p(Cr);router=p(Rt);subtotal=Qn(()=>this.cartService.totals()?.subtotal??0);close(){this.miniCartService.close()}continueShopping(){this.close()}viewBasket(){this.close(),this.router.navigateByUrl("/cart")}increment(r){this.cartService.addItemToCart(r,1,!1)}decrement(r){this.cartService.removeItemFromCart(r.productId)}removeItem(r){this.cartService.removeItemFromCart(r.productId,r.quantity)}onEscape(){this.close()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-mini-cart"]],hostBindings:function(t,e){t&1&&O("keydown.escape",function(){return e.onEscape()},Hn)},decls:26,vars:10,consts:[["aria-hidden","true",1,"mini-cart-backdrop",3,"click"],["role","dialog","aria-label","Shopping basket summary",1,"mini-cart-drawer","flex","flex-col","bg-white","shadow-2xl"],[1,"flex","items-center","justify-between","border-b","border-gray-200","px-4","py-3"],[1,"text-lg","font-semibold"],["mat-icon-button","","aria-label","Close basket",3,"click"],[1,"flex-1","space-y-3","overflow-y-auto","p-4"],[1,"text-gray-500"],[1,"space-y-3","border-t","border-gray-200","p-4"],[1,"flex","items-center","justify-between"],[1,"text-gray-600"],[1,"text-lg","font-bold"],["mat-stroked-button","",1,"w-full",3,"click"],["mat-flat-button","",1,"w-full",3,"click"],[1,"rounded-lg","border","border-gray-200","p-3"],[1,"flex","items-center","gap-3"],[1,"h-16","w-16","shrink-0","rounded","object-cover",3,"src","alt"],[1,"min-w-0","flex-1"],[1,"truncate","font-medium"],[1,"text-sm","text-gray-500"],["mat-icon-button","",1,"text-red-700!",3,"click"],[1,"mt-2","flex","items-center","justify-between"],[1,"flex","items-center","gap-1"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"w-8","text-center","font-semibold"],[1,"text-green-600!"],[1,"font-semibold"]],template:function(t,e){t&1&&(o(0,"div",0),O("click",function(){return e.close()}),s(),o(1,"aside",1)(2,"div",2)(3,"h2",3),u(4),s(),o(5,"button",4),O("click",function(){return e.close()}),o(6,"mat-icon"),u(7,"close"),s()()(),o(8,"div",5),$(9,xs,2,0)(10,ks,2,0,"p",6),s(),o(11,"div",7)(12,"div",8)(13,"span",9),u(14,"Subtotal"),s(),o(15,"span",10),u(16),Xt(17,"currency"),s()(),o(18,"button",11),O("click",function(){return e.continueShopping()}),o(19,"mat-icon"),u(20,"arrow_back"),s(),u(21," Continue shopping "),s(),o(22,"button",12),O("click",function(){return e.viewBasket()}),o(23,"mat-icon"),u(24,"shopping_cart"),s(),u(25," View your basket "),s()()()),t&2&&(ut("open",e.miniCartService.isOpen()),_(),ut("open",e.miniCartService.isOpen()),mt("inert",e.miniCartService.isOpen()?null:""),_(3),_t("Your basket (",e.cartService.itemCount(),")"),_(5),K(e.cartService.itemCount()?9:10),_(7),st(Gt(17,8,e.subtotal())))},dependencies:[kt,gi,ft,me],styles:[".mini-cart-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0006;z-index:60;opacity:0;pointer-events:none;transition:opacity .3s ease}.mini-cart-backdrop.open[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.mini-cart-drawer[_ngcontent-%COMP%]{position:fixed;top:0;right:0;height:100dvh;z-index:61;transform:translate(100%);transition:transform .3s ease-out}.mini-cart-drawer.open[_ngcontent-%COMP%]{transform:translate(0)}.mini-cart-drawer[_ngcontent-%COMP%]{width:100%}@media(min-width:640px){.mini-cart-drawer[_ngcontent-%COMP%]{width:50%}}@media(min-width:1024px){.mini-cart-drawer[_ngcontent-%COMP%]{width:28%}}"]})};var Hi=class i{title="Skinet";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"container","mt-20","lg:mt-24"]],template:function(t,e){t&1&&(X(0,"app-header"),o(1,"div",0),X(2,"router-outlet"),s(),X(3,"app-mini-cart"))},dependencies:[ar,ji,Vi],encapsulation:2})};tr(Hi,wa).catch(i=>console.error(i));
