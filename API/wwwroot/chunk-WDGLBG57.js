import{a as kt,b as H,c as Q,d as wt,e as je,f as Dt,g as Mt,h as St,i as tn,j as sn,k as ln,l as At}from"./chunk-VF3NT4LP.js";import{c as an,d as on,e as rn}from"./chunk-ARP4EF2F.js";import{a as Ft}from"./chunk-WTYPRTSM.js";import{a as cn}from"./chunk-MGN2K773.js";import{B as j,E as Bt,F as Lt,G as dn,a as Ee,d as Pt,f as x,h as Et,i as z,j as We,l as qe,m as Ge,n as $e,o as Ue,p as Ze,q as Ke,r as Ye,s as Xe,t as Je,u as Rt,v as en,w as V,x as nn}from"./chunk-PK2CYUVM.js";import{$ as _e,$a as g,$c as ze,Aa as S,Ba as Z,Bc as Ae,C as pe,Ca as K,D as ot,Da as xe,Dc as Le,E as ue,Ea as $t,Ec as Fe,F as G,Fa as Y,Ga as X,Gb as yt,Ha as b,Hb as C,Ia as r,Ib as Ct,J as he,Ja as l,K as fe,Ka as v,L as F,Lc as It,Mb as De,N as s,Nb as Me,O as w,Oa as ke,P as D,Pa as Ie,Pc as Yt,Qc as Oe,Ra as J,Rb as Tt,Rc as Ne,S as qt,Ta as p,Tc as P,V as y,Va as h,Vc as N,W as $,Wa as ct,Xa as mt,Xc as He,Ya as bt,Yc as Qe,Za as tt,_a as _,aa as rt,ac as xt,ba as O,bd as Ve,ca as ge,cd as Xt,d as B,db as Ut,eb as pt,f as se,fb as T,fc as Zt,g as at,ga as d,gb as ut,gc as Se,ha as st,hb as m,hc as Pe,i as le,ia as lt,ib as f,jb as ht,k as de,ka as Gt,la as dt,lb as ft,mb as _t,n as L,na as ve,nb as gt,oa as u,ob as vt,oc as Kt,pa as ye,qa as A,qb as et,r as ce,rb as we,s as it,sc as Re,t as me,ta as U,ua as M,v as be,va as Ce,vc as Be,za as Te}from"./chunk-I2NNZXTW.js";var ae=["*"];function xn(a,i){a&1&&mt(0)}var kn=["tabListContainer"],In=["tabList"],wn=["tabListInner"],Dn=["nextPaginator"],Mn=["previousPaginator"],Sn=["content"];function Pn(a,i){}var En=["tabBodyWrapper"],Rn=["tabHeader"];function Bn(a,i){}function An(a,i){if(a&1&&M(0,Bn,0,0,"ng-template",12),a&2){let t=h().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function Ln(a,i){if(a&1&&m(0),a&2){let t=h().$implicit;f(t.textLabel)}}function Fn(a,i){if(a&1){let t=J();r(0,"div",7,2),p("click",function(){let n=w(t),o=n.$implicit,c=n.$index,I=h(),R=Ut(1);return D(I._handleClick(o,R,c))})("cdkFocusChange",function(n){let o=w(t).$index,c=h();return D(c._tabFocusChanged(n,o))}),v(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),Z(6,An,1,1,null,12)(7,Ln,1,1),l()()()}if(a&2){let t=i.$implicit,e=i.$index,n=Ut(1),o=h();ut(t.labelClass),T("mdc-tab--active",o.selectedIndex===e),b("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),S("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),b("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),d(3),K(t.templateLabel?6:7)}}function On(a,i){a&1&&mt(0)}function Nn(a,i){if(a&1){let t=J();r(0,"mat-tab-body",13),p("_onCentered",function(){w(t);let n=h();return D(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){w(t);let o=h();return D(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){w(t);let o=h();return D(o._bodyCentered(n))}),l()}if(a&2){let t=i.$implicit,e=i.$index,n=h();ut(t.bodyClass),b("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),S("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Hn=new F("MatTabContent"),Qn=(()=>{class a{template=s(lt);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabContent",""]],features:[et([{provide:Hn,useExisting:a}])]})}return a})(),zn=new F("MatTabLabel"),un=new F("MAT_TAB"),Vn=(()=>{class a extends Ve{_closestTab=s(un,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=rt(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[et([{provide:zn,useExisting:a}]),U]})}return a})(),hn=new F("MAT_TAB_GROUP"),ie=(()=>{class a{_viewContainerRef=s(ve);_closestTabGroup=s(hn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new at;position=null;origin=null;isActive=!1;constructor(){s(Pe).load(Oe)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ze(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=u({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&bt(o,Vn,5)(o,Qn,7,lt),e&2){let c;_(c=g())&&(n.templateLabel=c.first),_(c=g())&&(n._explicitContent=c.first)}},viewQuery:function(e,n){if(e&1&&tt(lt,7),e&2){let o;_(o=g())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&S("id",null)},inputs:{disabled:[2,"disabled","disabled",C],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[et([{provide:un,useExisting:a}]),_e],ngContentSelectors:ae,decls:1,vars:0,template:function(e,n){e&1&&(ct(),Ce(0,xn,1,0,"ng-template"))},encapsulation:2})}return a})(),Jt="mdc-tab-indicator--active",mn="mdc-tab-indicator--no-transition",te=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(n=>n.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},jn=(()=>{class a{_elementRef=s(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Jt);return}let n=e.getBoundingClientRect(),o=t.width/n.width,c=t.left-n.left;e.classList.add(mn),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(mn),e.classList.add(Jt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Jt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C]}})}return a})();var fn=(()=>{class a extends jn{elementRef=s(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=rt(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(S("aria-disabled",!!n.disabled),T("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",C]},features:[U]})}return a})(),bn={passive:!0},Wn=650,qn=100,Gn=(()=>{class a{_elementRef=s(O);_changeDetectorRef=s(yt);_viewportRuler=s(Qe);_dir=s(Zt,{optional:!0});_ngZone=s($);_platform=s(Kt);_sharedResizeObserver=s(en);_injector=s(qt);_renderer=s(Gt);_animationsDisabled=It();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new at;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new at;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new y;indexFocused=new y;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),bn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),bn))}ngAfterContentInit(){let t=this._dir?this._dir.change:de("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(be(32),G(this._destroyed)),n=this._viewportRuler.change(150).pipe(G(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Le(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),st(o,{injector:this._injector}),it(t,n,e,this._items.changes,this._itemsResized()).pipe(G(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?le:this._items.changes.pipe(ot(this._items),ue(t=>new se(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),pe(1),me(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ae(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:c}=e.elementRef.nativeElement,I,R;this._getLayoutDirection()=="ltr"?(I=o,R=I+c):(R=this._tabListInner.nativeElement.offsetWidth-o,I=R-c);let Wt=this.scrollDistance,re=this.scrollDistance+n;I<Wt?this.scrollDistance-=Wt-I:R>re&&(this.scrollDistance+=Math.min(R-re,I-Wt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),ce(Wn,qn).pipe(G(it(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",C],selectedIndex:[2,"selectedIndex","selectedIndex",Ct]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),$n=(()=>{class a extends Gn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new te(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=rt(a)))(n||a)}})();static \u0275cmp=u({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&bt(o,fn,4),e&2){let c;_(c=g())&&(n._items=c)}},viewQuery:function(e,n){if(e&1&&tt(kn,7)(In,7)(wn,7)(Dn,5)(Mn,5),e&2){let o;_(o=g())&&(n._tabListContainer=o.first),_(o=g())&&(n._tabList=o.first),_(o=g())&&(n._tabListInner=o.first),_(o=g())&&(n._nextPaginator=o.first),_(o=g())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&T("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",C]},features:[U],ngContentSelectors:ae,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(ct(),r(0,"div",5,0),p("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),v(2,"div",6),l(),r(3,"div",7,1),p("keydown",function(c){return n._handleKeydown(c)}),r(5,"div",8,2),p("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),mt(9),l()()(),r(10,"div",10,4),p("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),v(12,"div",6),l()),e&2&&(T("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),b("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),T("_mat-animation-noopable",n._animationsDisabled),d(2),S("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),T("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),b("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Yt,Be],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),Un=new F("MAT_TABS_CONFIG"),pn=(()=>{class a extends Xt{_host=s(ee);_ngZone=s($);_centeringSub=B.EMPTY;_leavingSub=B.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ot(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabBodyHost",""]],features:[U]})}return a})(),ee=(()=>{class a{_elementRef=s(O);_dir=s(Zt,{optional:!0});_ngZone=s($);_injector=s(qt);_renderer=s(Gt);_diAnimationsDisabled=It();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=B.EMPTY;_position;_previousPosition;_onCentering=new y;_beforeCentering=new y;_afterLeavingCenter=new y;_onCentered=new y(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=s(yt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),st(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),st(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=u({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&tt(pn,5)(Sn,5),e&2){let o;_(o=g())&&(n._portalHost=o.first),_(o=g())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&S("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(r(0,"div",1,0),M(2,Pn,0,0,"ng-template",2),l()),e&2&&T("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[pn,He],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),_n=(()=>{class a{_elementRef=s(O);_changeDetectorRef=s(yt);_ngZone=s($);_tabsSubscription=B.EMPTY;_tabLabelSubscription=B.EMPTY;_tabBodySubscription=B.EMPTY;_diAnimationsDisabled=It();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ge;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new y;focusChange=new y;animationDone=new y;selectedTabChange=new y(!0);_groupId;_isServer=!s(Kt).isBrowser;constructor(){let t=s(Un,{optional:!0});this._groupId=s(Fe).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ot(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ne;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=it(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=u({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&bt(o,ie,5),e&2){let c;_(c=g())&&(n._allTabs=c)}},viewQuery:function(e,n){if(e&1&&tt(En,5)(Rn,5)(ee,5),e&2){let o;_(o=g())&&(n._tabBodyWrapper=o.first),_(o=g())&&(n._tabHeader=o.first),_(o=g())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(S("mat-align-tabs",n.alignTabs),ut("mat-"+(n.color||"primary")),pt("--mat-tab-animation-duration",n.animationDuration),T("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",C],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",C],selectedIndex:[2,"selectedIndex","selectedIndex",Ct],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ct],disablePagination:[2,"disablePagination","disablePagination",C],disableRipple:[2,"disableRipple","disableRipple",C],preserveContent:[2,"preserveContent","preserveContent",C],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[et([{provide:hn,useExisting:a}])],ngContentSelectors:ae,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(ct(),r(0,"mat-tab-header",3,0),p("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),Y(2,Fn,8,17,"div",4,$t),l(),Z(4,On,1,0),r(5,"div",5,1),Y(7,Nn,1,10,"mat-tab-body",6,$t),l()),e&2&&(b("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Te("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),X(n._tabs),d(2),K(n._isServer?4:-1),d(),T("_mat-animation-noopable",n._animationsDisabled()),d(2),X(n._tabs))},dependencies:[$n,fn,Re,Yt,Xt,ee],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),ne=class{index;tab};var gn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=ye({type:a});static \u0275inj=fe({imports:[Se]})}return a})();var Ot=class{pageNumber=1;pageSize=10;filter=""};var Kn=()=>[5,10,20];function Yn(a,i){if(a&1&&(r(0,"th",7),m(1),l()),a&2){let t=i.$implicit;d(),f(t.header)}}function Xn(a,i){a&1&&(r(0,"th",7),m(1,"Actions"),l())}function Jn(a,i){if(a&1&&(r(0,"td",11),m(1),l()),a&2){let t=i.$implicit,e=h().$implicit,n=h();d(),f(n.getCellValue(e,t))}}function ta(a,i){if(a&1){let t=J();ke(0),r(1,"button",14),p("click",function(){let n=w(t).$implicit,o=h(2).$implicit,c=h();return D(c.onAction(n.action,o))}),r(2,"mat-icon"),m(3),l()(),Ie()}if(a&2){let t=i.$implicit,e=h(2).$implicit;d(),b("matTooltip",vt(t.tooltip))("disabled",t.disabled?t.disabled(e):!1),d(),pt("color",t.disabled!=null&&t.disabled(e)?null:t.color),d(),f(t.icon)}}function ea(a,i){if(a&1&&(r(0,"td",11)(1,"div",12),M(2,ta,4,6,"ng-container",13),l()()),a&2){let t=h(2);d(2),b("ngForOf",t.actions)}}function na(a,i){if(a&1&&(r(0,"tr",8),M(1,Jn,2,1,"td",9)(2,ea,3,1,"td",10),l()),a&2){let t=h();d(),b("ngForOf",t.columns),d(),b("ngIf",t.actions.length)}}var W=class a{columns=[];dataSource=[];actions=[];totalItems=0;pageSize=5;pageIndex=0;pageChange=new y;onPageChange(i){this.pageIndex=i.pageIndex,this.pageSize=i.pageSize,this.pageChange.emit(i)}onAction(i,t){i(t)}getCellValue(i,t){let e=i[t.field];return t.pipe==="currency"?new Intl.NumberFormat("en-US",{style:"currency",currency:t.pipeArgs||"USD"}).format(e):t.pipe==="date"?new Date(e).toLocaleDateString("en-US",t.pipeArgs):e}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-custom-table"]],inputs:{columns:"columns",dataSource:"dataSource",actions:"actions",totalItems:"totalItems",pageSize:"pageSize",pageIndex:"pageIndex"},outputs:{pageChange:"pageChange"},decls:9,vars:8,consts:[[1,"p-4"],[1,"min-w-full","bg-white","border","border-gray-300"],[1,"border-b","bg-gray-200"],["class","py-2 px-4 text-left",4,"ngFor","ngForOf"],["class","py-2 px-4 text-left",4,"ngIf"],["class","border-b",4,"ngFor","ngForOf"],[1,"mt-4","bg-white",3,"page","length","pageSize","pageIndex","pageSizeOptions"],[1,"py-2","px-4","text-left"],[1,"border-b"],["class","py-2 px-4",4,"ngFor","ngForOf"],["class","py-2 px-4",4,"ngIf"],[1,"py-2","px-4"],[1,"flex","gap-2"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click","matTooltip","disabled"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"table",1)(2,"thead")(3,"tr",2),M(4,Yn,2,1,"th",3)(5,Xn,2,0,"th",4),l()(),r(6,"tbody"),M(7,na,3,2,"tr",5),l()(),r(8,"mat-paginator",6),p("page",function(o){return e.onPageChange(o)}),l()()),t&2&&(d(4),b("ngForOf",e.columns),d(),b("ngIf",e.actions.length),d(2),b("ngForOf",e.dataSource),d(),b("length",e.totalItems)("pageSize",e.pageSize)("pageIndex",e.pageIndex)("pageSizeOptions",we(7,Kn)))},dependencies:[Tt,De,Me,Ne,sn,Ee,At,ln],styles:[".undo-icon[_ngcontent-%COMP%]{color:#c30808f1}button[disabled][_ngcontent-%COMP%]   .undo-icon[_ngcontent-%COMP%]{color:gray}.visibility-icon[_ngcontent-%COMP%]{color:#1010bfc6}"]})};var Nt=class a{dialogRef=s(H);data=s(Q);onConfirm(){this.dialogRef.close(!0)}onCancel(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-confirmation-dialog"]],decls:10,vars:3,consts:[[1,"p-4"],[1,"text-lg","font-semibold","mb-4"],[1,"mb-4"],[1,"flex","justify-end","gap-2"],["mat-stroked-button","",1,"cancel",3,"click"],["mat-stroked-button","",1,"confirm",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"h2",1),m(2),l(),r(3,"p",2),m(4),l(),r(5,"div",3)(6,"button",4),p("click",function(){return e.onCancel()}),m(7,"Cancel"),l(),r(8,"button",5),p("click",function(){return e.onConfirm()}),m(9),l()()()),t&2&&(d(2),f(e.data.title),d(2),f(e.data.message),d(5),f(e.data.buttonText))},dependencies:[P],styles:[".cancel[_ngcontent-%COMP%]{color:#1313c3;border-color:#1111be}.confirm[_ngcontent-%COMP%]{color:#d32f2f;border-color:#d32f2f}"]})};var q=class a{dialog=s(wt);confirm(i,t,e){let n=this.dialog.open(Nt,{width:"400px",data:{title:i,message:t,buttonText:e}});return L(n.afterClosed())}static \u0275fac=function(t){return new(t||a)};static \u0275prov=he({token:a,factory:a.\u0275fac,providedIn:"root"})};var Ht=class a{orders=[];adminService=s(Ft);dialogService=s(q);router=s(xt);orderParams=new Ot;totalItems=0;columns=[{field:"id",header:"No."},{field:"buyerEmail",header:"Buyer Email"},{field:"orderDate",header:"Order Date",pipe:"date",pipeArgs:{year:"numeric",month:"short",day:"numeric"}},{field:"total",header:"Total",pipe:"currency",pipeArgs:"USD"},{field:"status",header:"Status"}];actions=[{label:"View",icon:"visibility",tooltip:"View Order",color:"rgba(16, 16, 191, 0.775)",action:i=>{this.router.navigateByUrl(`/orders/${i.id}`)}},{label:"Refund",icon:"undo",tooltip:"Refund Order",color:"rgba(195, 8, 8, 0.944)",disabled:i=>i.status==="Refunded",action:i=>{this.openConfirmDialog(i.id)}}];ngOnInit(){this.loadOrders()}loadOrders(){this.adminService.getOrders(this.orderParams).subscribe({next:i=>{i.data&&(this.orders=i.data,this.totalItems=i.count)}})}onPageChange(i){this.orderParams.pageNumber=i.pageIndex+1,this.orderParams.pageSize=i.pageSize,this.loadOrders()}onAction(i,t){i(t)}async openConfirmDialog(i){await this.dialogService.confirm("Confirm refund","Are you sure you want to issue this refund? This cannot be undone.","Refund")===!0&&this.refundOrder(i)}refundOrder(i){this.adminService.refundOrder(i).subscribe({next:t=>{this.orders=this.orders.map(e=>e.id===i?t:e),this.loadOrders()}})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-admin-orders"]],decls:3,vars:5,consts:[[1,"text-2xl","font-semibold","mt-4"],[3,"pageChange","columns","dataSource","actions","totalItems","pageSize"]],template:function(t,e){t&1&&(r(0,"div",0),m(1,` Customer orders
`),l(),r(2,"app-custom-table",1),p("pageChange",function(o){return e.onPageChange(o)}),l()),t&2&&(d(2),b("columns",e.columns)("dataSource",e.orders)("actions",e.actions)("totalItems",e.totalItems)("pageSize",e.orderParams.pageSize))},dependencies:[At,Tt,W],encapsulation:2})};function aa(a,i){if(a&1&&(r(0,"mat-error"),m(1),l()),a&2){let t=h();d(),ht("",t.label," is required")}}var Qt=class a{constructor(i){this.controlDir=i;this.controlDir.valueAccessor=this}label="";writeValue(i){}registerOnChange(i){}registerOnTouched(i){}get control(){return this.controlDir.control}static \u0275fac=function(t){return new(t||a)(dt(Et,2))};static \u0275cmp=u({type:a,selectors:[["app-text-area"]],inputs:{label:"label"},decls:5,vars:5,consts:[["appearance","outline",1,"w-full","mb-4"],["matInput","",3,"formControl","placeholder"]],template:function(t,e){t&1&&(r(0,"mat-form-field",0)(1,"mat-label"),m(2),l(),v(3,"textarea",1),Z(4,aa,2,1,"mat-error"),l()),t&2&&(d(2),f(e.label),d(),b("placeholder",vt(e.label))("formControl",e.control),d(),K(e.control.hasError("required")?4:-1))},dependencies:[Rt,Pt,z,Ue,j,Lt,nn,V],encapsulation:2})};function oa(a,i){if(a&1&&(r(0,"mat-option",2),m(1),l()),a&2){let t=i.$implicit;b("value",t),d(),f(t)}}var zt=class a{constructor(i){this.controlDir=i;this.controlDir.valueAccessor=this}label="";options=[];value="";onChange=()=>{};onTouched=()=>{};onSelect(i){this.value=i.value,this.onChange(this.value)}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}static \u0275fac=function(t){return new(t||a)(dt(Et,2))};static \u0275cmp=u({type:a,selectors:[["app-select-input"]],inputs:{label:"label",options:"options"},decls:6,vars:2,consts:[["appearance","outline",1,"w-full","mb-4"],[3,"selectionChange","valueChange","value"],[3,"value"]],template:function(t,e){t&1&&(r(0,"mat-form-field",0)(1,"mat-label"),m(2),l(),r(3,"mat-select",1),p("selectionChange",function(o){return e.onSelect(o)}),gt("valueChange",function(o){return _t(e.value,o)||(e.value=o),o}),Y(4,oa,2,2,"mat-option",2,xe),l()()),t&2&&(d(2),f(e.label),d(),ft("value",e.value),d(),X(e.options))},dependencies:[Bt,j,V,rn,on,an],encapsulation:2})};var nt=class a{productForm;data=s(Q);fb=s(Xe);dialogRef=s(H);shopService=s(kt);ngOnInit(){this.initializeForm(),setTimeout(()=>{this.loadBrandsAndTypes()}),this.data.product&&this.productForm.reset(this.data.product)}loadBrandsAndTypes(){this.shopService.getBrands(),this.shopService.getTypes()}initializeForm(){this.productForm=this.fb.group({name:["",[x.required]],description:["",[x.required]],price:[0,[x.required,x.min(0)]],pictureUrl:["",[x.required]],type:["",[x.required]],brand:["",[x.required]],quantityInStock:[0,[x.required,x.min(0)]]})}onSubmit(){if(this.productForm.valid){let i=this.productForm.value;this.data.product&&(i.id=this.data.product.id),this.dialogRef.close({product:i})}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-product-form"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"p-3"],[1,"p-4","w-full",3,"ngSubmit","formGroup"],["label","Product name","formControlName","name"],["label","Description","formControlName","description"],["label","Price","formControlName","price","type","number"],["label","Picture URL","formControlName","pictureUrl"],[1,"flex","justify-between","w-full","gap-3"],["label","Type","formControlName","type",1,"w-full",3,"options"],["label","Brand","formControlName","brand",1,"w-full",3,"options"],[1,"flex","justify-end","gap-3"],["mat-button","","color","warn","type","button","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){t&1&&(r(0,"h2",0),m(1),l(),r(2,"mat-dialog-content",1)(3,"form",2),p("ngSubmit",function(){return e.onSubmit()}),v(4,"app-text-input",3)(5,"app-text-area",4)(6,"app-text-input",5)(7,"app-text-input",6),r(8,"div",7),v(9,"app-select-input",8)(10,"app-select-input",9),l(),r(11,"div",10)(12,"button",11),m(13,"Cancel"),l(),r(14,"button",12),m(15," Submit "),l()()()()),t&2&&(d(),f(e.data.title),d(2),b("formGroup",e.productForm),d(6),b("options",e.shopService.types),d(),b("options",e.shopService.brands),d(4),b("disabled",e.productForm.invalid))},dependencies:[cn,N,P,St,je,Dt,Mt,Rt,Ge,z,We,Ke,Ze,Qt,zt],encapsulation:2})};var Vt=class a{data=s(Q);dialogRef=s(H);updatedQuantity=this.data.quantity;get canUpdate(){return this.updatedQuantity!==null&&this.updatedQuantity>=0&&this.updatedQuantity!==this.data.quantity}updateQuantity(){this.canUpdate&&this.dialogRef.close({updatedQuantity:this.updatedQuantity})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-update-quantity"]],decls:11,vars:3,consts:[["mat-dialog-title",""],[1,"flex","gap-4","mt-6"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"]],template:function(t,e){t&1&&(r(0,"h2",0),m(1,"Update quantity in stock"),l(),v(2,"span"),r(3,"mat-dialog-content")(4,"div",1)(5,"mat-form-field",2)(6,"mat-label"),m(7),l(),r(8,"input",3),gt("ngModelChange",function(o){return _t(e.updatedQuantity,o)||(e.updatedQuantity=o),o}),l()(),r(9,"button",4),p("click",function(){return e.updateQuantity()}),m(10," Update quantity "),l()()()),t&2&&(d(7),ht("Quantity of ",e.data.name),d(),ft("ngModel",e.updatedQuantity),d(),b("disabled",!e.canUpdate))},dependencies:[St,Dt,Mt,Bt,j,V,dn,Lt,N,P,Je,Pt,$e,z,Ye,qe],encapsulation:2})};var jt=class a{products=[];shopService=s(kt);dialog=s(wt);adminService=s(Ft);dialogService=s(q);router=s(xt);productParams=new tn;totalItems=0;columns=[{field:"id",header:"No."},{field:"name",header:"Product name"},{field:"type",header:"Type"},{field:"brand",header:"Brand"},{field:"quantityInStock",header:"Quantity"},{field:"price",header:"Price",pipe:"currency",pipeArgs:"USD"}];actions=[{label:"Edit",icon:"edit",tooltip:"Edit product",color:"rgba(16, 16, 191, 0.775)",action:i=>{this.openEditDialog(i)}},{label:"Delete",icon:"delete",tooltip:"Delete product",color:"rgba(195, 8, 8, 0.944)",action:i=>{this.openConfirmDialog(i.id)}},{label:"Update quantity",icon:"add_circle",tooltip:"Update quantity in stock",color:"#2e7d32",action:i=>{this.openQuantityDialog(i)}},{label:"View",icon:"visibility",tooltip:"View product",action:i=>{this.router.navigateByUrl(`/shop/${i.id}`)}}];ngOnInit(){this.loadProducts()}loadProducts(){this.shopService.getProducts(this.productParams).subscribe({next:i=>{i.data&&(this.products=i.data,this.totalItems=i.count)}})}onPageChange(i){this.productParams.pageNumber=i.pageIndex+1,this.productParams.pageSize=i.pageSize,this.loadProducts()}openCreateDialog(){this.dialog.open(nt,{minWidth:"500px",data:{title:"Create product"}}).afterClosed().subscribe({next:async t=>{if(t){let e=await L(this.adminService.createProduct(t.product));e&&this.products.push(e)}}})}openEditDialog(i){this.dialog.open(nt,{minWidth:"500px",data:{title:"Edit product",product:i}}).afterClosed().subscribe({next:async e=>{if(e){await L(this.adminService.updateProduct(e.product));let n=this.products.findIndex(o=>o.id===e.product.id);n!==-1&&(this.products[n]=e.product)}}})}async openConfirmDialog(i){await this.dialogService.confirm("Confirm delete product","Are you sure you want to delete this product? This cannot be undone","Delete")&&this.onDelete(i)}onDelete(i){this.adminService.deleteProduct(i).subscribe({next:()=>{this.products=this.products.filter(t=>t.id!==i)}})}openQuantityDialog(i){this.dialog.open(Vt,{minWidth:"500px",data:{quantity:i.quantityInStock,name:i.name}}).afterClosed().subscribe({next:async e=>{if(e){await L(this.adminService.updateStock(i.id,e.updatedQuantity));let n=this.products.findIndex(o=>o.id===i.id);n!==-1&&(this.products[n].quantityInStock=e.updatedQuantity)}}})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-admin-catalog"]],decls:6,vars:5,consts:[[1,"flex","justify-between","items-center","mt-2"],[1,"text-2xl","font-semibold","mt-4"],["mat-flat-button","",3,"click"],[3,"pageChange","columns","dataSource","actions","totalItems","pageSize"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1),m(2," Admin catalog "),l(),r(3,"button",2),p("click",function(){return e.openCreateDialog()}),m(4," Create new "),l()(),r(5,"app-custom-table",3),p("pageChange",function(o){return e.onPageChange(o)}),l()),t&2&&(d(5),b("columns",e.columns)("dataSource",e.products)("actions",e.actions)("totalItems",e.totalItems)("pageSize",e.productParams.pageSize))},dependencies:[W,N,P],encapsulation:2})};var yn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["app-admin"]],decls:8,vars:0,consts:[[1,"min-h-screen"],[1,"bg-white"],["label","Orders"],["label","Catalog"],["label","Customer service"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2),v(3,"app-admin-orders"),l(),r(4,"mat-tab",3),v(5,"app-admin-catalog"),l(),r(6,"mat-tab",4),m(7," Customer service "),l()()())},dependencies:[gn,ie,_n,Ht,jt],styles:[".undo-icon[_ngcontent-%COMP%]{color:#c30808f1}button[disabled][_ngcontent-%COMP%]   .undo-icon[_ngcontent-%COMP%]{color:gray}.visibility-icon[_ngcontent-%COMP%]{color:#1010bfc6}"]})};export{yn as Admin};
