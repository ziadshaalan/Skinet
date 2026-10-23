import{a as $e}from"./chunk-S5PZJMBB.js";import{f as Xe}from"./chunk-2W3EJMGL.js";import{B as Ze,a as G,c as Ve,d as ze,e as Ne,f as S,h as Le,i as j,j as Oe,m as qe,o as Ue,p as Be,q as Ge,s as je,u as Q,w as Qe,x as He,y as We}from"./chunk-KSCDR56F.js";import{$,$a as N,Db as J,Dc as Fe,Ea as A,Eb as ve,Fa as k,Fb as q,Ga as x,Gb as ye,Ha as me,Hb as U,Ia as V,Ja as P,Ka as M,Kb as Ce,Kc as Ae,La as b,Ma as c,Mb as E,Na as o,Nb as we,O as ie,Oa as m,Oc as Pe,Pc as Me,Q as ae,Qc as De,R as ce,Ra as he,Sc as Re,T as u,U as g,V as v,Va as I,W as D,Wa as be,X as oe,Xa as p,Za as d,_a as z,_b as Ie,aa as R,bb as ue,bc as Ee,cb as X,da as f,db as K,ec as B,fa as re,fb as L,gb as O,gc as Se,ha as se,hb as pe,hc as Te,ib as ke,jb as C,kb as xe,la as r,lb as s,mb as w,nb as _,qa as de,r as T,sb as _e,ta as y,ua as le,ub as fe,wb as ge}from"./chunk-UDX62KEG.js";var at=["mat-internal-form-field",""],ct=["*"],Ke=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,i){n&2&&C("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:at,ngContentSelectors:ct,decls:1,vars:0,template:function(n,i){n&1&&(z(),N(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var ot=["input"],rt=["label"],st=["*"],Y={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},dt=new ce("mat-checkbox-default-options",{providedIn:"root",factory:()=>Y}),h=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(h||{}),ee=class{source;checked},te=(()=>{class t{_elementRef=u(se);_changeDetectorRef=u(Ce);_ngZone=u(R);_animationsDisabled=Ae();_options=u(dt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new ee;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new $;indeterminateChange=new $;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=h.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Te).load(Me);let e=u(new ve("tabindex"),{optional:!0});this._options=this._options||Y,this.color=this._options.color||Y.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Fe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(h.Indeterminate):this._transitionCheckState(this.checked?h.Checked:h.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=f(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,i=this._getAnimationTargetElement();if(!(n===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let l=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(l)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?h.Checked:h.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case h.Init:if(n===h.Checked)return this._animationClasses.uncheckedToChecked;if(n==h.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case h.Unchecked:return n===h.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case h.Checked:return n===h.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case h.Indeterminate:return n===h.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["mat-checkbox"]],viewQuery:function(n,i){if(n&1&&ue(ot,5)(rt,5),n&2){let l;X(l=K())&&(i._inputElement=l.first),X(l=K())&&(i._labelElement=l.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,i){n&2&&(be("id",i.id),A("tabindex",null)("aria-label",null)("aria-labelledby",null),xe(i.color?"mat-"+i.color:"mat-accent"),C("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",E],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",E],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:we(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],checked:[2,"checked","checked",E],disabled:[2,"disabled","disabled",E],indeterminate:[2,"indeterminate","indeterminate",E]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[fe([{provide:Ve,useExisting:ie(()=>t),multi:!0},{provide:Ne,useExisting:t,multi:!0}]),re],ngContentSelectors:st,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,i){if(n&1&&(z(),c(0,"div",3),p("click",function(Z){return i._preventBubblingFromLabel(Z)}),c(1,"div",4,0)(3,"div",5),p("click",function(){return i._onTouchTargetClick()}),o(),c(4,"input",6,1),p("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(Z){return i._onInteractionEvent(Z)}),o(),m(6,"div",7),c(7,"div",8),D(),c(8,"svg",9),m(9,"path",10),o(),oe(),m(10,"div",11),o(),m(11,"div",12),o(),c(12,"label",13,2),N(14),o()()),n&2){let l=pe(2);b("labelPosition",i.labelPosition),r(4),C("mdc-checkbox--selected",i.checked),b("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),A("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),r(7),b("matRippleTrigger",l)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),r(),b("for",i.inputId)}},dependencies:[Pe,Ke],styles:[`.mdc-checkbox {
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
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
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

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
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

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
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
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
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
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
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
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),$t=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=ae({imports:[te,Se]})}return t})();var Je=["minLength","lower","upper","digit","symbol"];function Ye(t){let a=t.value??"",e={};return a.length<6&&(e.minLength=!0),/[a-z]/.test(a)||(e.lower=!0),/[A-Z]/.test(a)||(e.upper=!0),/[0-9]/.test(a)||(e.digit=!0),/[^a-zA-Z0-9]/.test(a)||(e.symbol=!0),Object.keys(e).length?{password:e}:null}function et(t,a){switch(t){case"minLength":return a.length>=6;case"lower":return/[a-z]/.test(a);case"upper":return/[A-Z]/.test(a);case"digit":return/[0-9]/.test(a);case"symbol":return/[^a-zA-Z0-9]/.test(a);default:return!1}}var tt={minLength:"At least 6 characters",lower:"A lowercase letter",upper:"An uppercase letter",digit:"A number",symbol:"A special character"};function mt(t,a){if(t&1){let e=I();c(0,"button",3),p("click",function(){g(e);let i=d();return v(i.togglePassword())}),c(1,"mat-icon"),s(2),o()()}if(t&2){let e=d();r(2),_(" ",e.hidePassword?"visibility":"visibility_off"," ")}}function ht(t,a){if(t&1&&(c(0,"mat-error"),s(1),o()),t&2){let e=d();r(),_("",e.label," is required")}}function bt(t,a){t&1&&(c(0,"mat-error"),s(1,"Email is invalid"),o())}var W=class t{constructor(a){this.controlDir=a;this.controlDir.valueAccessor=this}label="";type="text";autocomplete="";hidePassword=!0;writeValue(a){}registerOnChange(a){}registerOnTouched(a){}togglePassword(){this.hidePassword=!this.hidePassword}get control(){return this.controlDir.control}static \u0275fac=function(e){return new(e||t)(de(Le,2))};static \u0275cmp=y({type:t,selectors:[["app-text-input"]],inputs:{label:"label",type:"type",autocomplete:"autocomplete"},decls:7,vars:9,consts:[["appearance","outline",1,"w-full","mb-3"],["matInput","",3,"formControl","type","placeholder"],["mat-icon-button","","matSuffix","","type","button",1,"password-toggle"],["mat-icon-button","","matSuffix","","type","button",1,"password-toggle",3,"click"]],template:function(e,n){e&1&&(c(0,"mat-form-field",0)(1,"mat-label"),s(2),o(),m(3,"input",1),k(4,mt,3,1,"button",2),k(5,ht,2,1,"mat-error"),k(6,bt,2,0,"mat-error"),o()),e&2&&(r(2),w(n.label),r(),b("placeholder",_e(n.label))("formControl",n.control)("type",n.type==="password"?n.hidePassword?"password":"text":n.type),A("autocomplete",n.autocomplete||null),r(),x(n.type==="password"&&n.control.value?4:-1),r(),x(n.control.hasError("required")?5:-1),r(),x(n.control.hasError("email")?6:-1))},dependencies:[Q,ze,j,Ue,Ze,$e,He,Qe,We,G,De],styles:[".password-toggle[_ngcontent-%COMP%]{margin-right:8px}"]})};var ut=["container"],ne=null;function pt(){return window.turnstile?Promise.resolve():(ne??=new Promise((t,a)=>{let e=document.createElement("script");e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",e.async=!0,e.onload=()=>t(),e.onerror=()=>{ne=null,a(new Error("Turnstile failed to load"))},document.head.appendChild(e)}),ne)}var F=class t{token=q();zone=u(R);container=U.required("container");widgetId;destroyed=!1;async ngAfterViewInit(){try{await pt()}catch{return}this.destroyed||(this.widgetId=window.turnstile.render(this.container().nativeElement,{sitekey:B.turnstileSiteKey,callback:a=>this.zone.run(()=>this.token.emit(a)),"expired-callback":()=>this.zone.run(()=>this.token.emit(null)),"error-callback":()=>this.zone.run(()=>this.token.emit(null))}))}reset(){this.widgetId&&(window.turnstile.reset(this.widgetId),this.token.emit(null))}ngOnDestroy(){this.destroyed=!0,this.widgetId&&window.turnstile?.remove(this.widgetId)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-turnstile"]],viewQuery:function(e,n){e&1&&L(n.container,ut,5),e&2&&O()},outputs:{token:"token"},decls:2,vars:0,consts:[["container",""]],template:function(e,n){e&1&&he(0,"div",null,0)},encapsulation:2})};var kt=t=>({email:t});function xt(t,a){t&1&&m(0,"li",8)}function _t(t,a){if(t&1&&(c(0,"li",5)(1,"span",6),s(2),o(),c(3,"span",7),s(4),o()(),k(5,xt,1,0,"li",8)),t&2){let e=a.$implicit,n=a.$index,i=d();r(),ke("background-color",n<=i.stepIndex()?"var(--mat-sys-primary)":"")("color",n<=i.stepIndex()?"var(--mat-sys-on-primary)":""),C("border",n>i.stepIndex())("border-gray-300",n>i.stepIndex())("text-gray-400",n>i.stepIndex()),r(),w(n+1),r(),C("text-gray-900",n===i.stepIndex())("text-gray-400",n!==i.stepIndex()),r(),w(e),r(),x(n<i.stepLabels.length-1?5:-1)}}function ft(t,a){if(t&1){let e=I();c(0,"form",9),p("ngSubmit",function(){g(e);let i=d();return v(i.continue())}),c(1,"h1",10),s(2,"Sign in or create an account"),o(),c(3,"p",11),s(4," Enter your email and we will take it from there. "),o(),m(5,"app-text-input",12),c(6,"button",13),s(7),o()()}if(t&2){let e=d();b("formGroup",e.emailForm),r(6),b("disabled",e.emailForm.invalid||e.loading()),r(),_(" ",e.loading()?"One moment...":"Continue"," ")}}function gt(t,a){if(t&1&&(c(0,"div",20)(1,"a",21),s(2,"Forgot password?"),o()()),t&2){let e=d(3);r(),b("queryParams",ge(1,kt,e.email()))}}function vt(t,a){if(t&1){let e=I();c(0,"form",18),p("ngSubmit",function(){g(e);let i=d(2);return v(i.signIn())}),m(1,"app-text-input",19),k(2,gt,3,3,"div",20),c(3,"button",13),s(4),o()()}if(t&2){let e=d(2);b("formGroup",e.loginForm),r(2),x(e.emailEnabled?2:-1),r(),b("disabled",e.loginForm.invalid||e.loading()),r(),_(" ",e.loading()?"Signing in...":"Sign in"," ")}}function yt(t,a){if(t&1&&(c(0,"div",17)(1,"p",22),s(2),o(),c(3,"p",23),s(4," It has no password, so please press "),c(5,"strong"),s(6),o(),s(7," below to sign in. "),o()()),t&2){let e=d(2);r(2),_("This account was created with ",e.socialProviderName(),"."),r(4),_("Continue with ",e.socialProviderName())}}function Ct(t,a){if(t&1){let e=I();c(0,"h1",10),s(1,"Welcome back"),o(),c(2,"div",14)(3,"span",15),s(4),o(),c(5,"button",16),p("click",function(){g(e);let i=d();return v(i.changeEmail())}),s(6,"Change"),o()(),k(7,vt,5,4,"form",2)(8,yt,8,2,"div",17)}if(t&2){let e=d();r(4),w(e.email()),r(3),x(e.hasPassword()?7:8)}}function wt(t,a){if(t&1&&(c(0,"li",32)(1,"mat-icon",33),s(2),o(),c(3,"span"),s(4),o()()),t&2){let e=a.$implicit,n=d(2);C("text-green-700",n.passwordRuleMet(e))("text-gray-400",!n.passwordRuleMet(e)),r(2),_(" ",n.passwordRuleMet(e)?"check_circle":"radio_button_unchecked"," "),r(2),w(n.passwordRuleLabels[e])}}function It(t,a){if(t&1){let e=I();c(0,"form",18),p("ngSubmit",function(){g(e);let i=d();return v(i.createAccount())}),c(1,"h1",10),s(2,"Create your account"),o(),c(3,"div",14)(4,"span",15),s(5),o(),c(6,"button",16),p("click",function(){g(e);let i=d();return v(i.changeEmail())}),s(7,"Change"),o()(),c(8,"div",24),m(9,"app-text-input",25)(10,"app-text-input",26),o(),m(11,"app-text-input",27),c(12,"ul",28),P(13,wt,5,6,"li",29,V),o(),c(15,"mat-checkbox",30),s(16," Send me news and offers by email "),o(),c(17,"app-turnstile",31),p("token",function(i){g(e);let l=d();return v(l.captchaToken.set(i))}),o(),c(18,"button",13),s(19),o()()}if(t&2){let e=d();b("formGroup",e.registerForm),r(5),w(e.email()),r(8),M(e.passwordRules),r(5),b("disabled",e.registerForm.invalid||!e.captchaToken()||e.loading()),r(),_(" ",e.loading()?"Creating your account...":"Create account"," ")}}function Et(t,a){if(t&1&&(c(0,"li"),s(1),o()),t&2){let e=a.$implicit;r(),w(e)}}function St(t,a){if(t&1&&(c(0,"div",3)(1,"ul",34),P(2,Et,2,1,"li",null,me),o()()),t&2){let e=d();r(2),M(e.errors())}}function Tt(t,a){t&1&&(D(),c(0,"svg",40),m(1,"path",42)(2,"path",43)(3,"path",44)(4,"path",45),o())}function Ft(t,a){if(t&1&&(c(0,"span",41),s(1),o()),t&2){let e=d().$implicit;r(),_(" ",e.charAt(0)," ")}}function At(t,a){if(t&1){let e=I();c(0,"button",39),p("click",function(){let i=g(e).$implicit,l=d(2);return v(l.continueWith(i))}),k(1,Tt,5,0,":svg:svg",40)(2,Ft,2,1,"span",41),c(3,"span"),s(4),o()()}if(t&2){let e,n=a.$implicit;r(),x((e=n)==="Google"?1:2),r(3),_("Continue with ",n)}}function Pt(t,a){if(t&1&&(c(0,"div",4)(1,"div",35),m(2,"span",36),c(3,"span",37),s(4,"or"),o(),m(5,"span",36),o(),P(6,At,5,2,"button",38,V),o()),t&2){let e=d();r(6),M(e.providers())}}var it=class t{fb=u(je);accountService=u(Xe);turnstile=U(F);returnUrl=ye("/shop");authenticated=q();step=f("email");email=f("");hasPassword=f(!0);accountProviders=f([]);providers=f([]);loading=f(!1);errors=f([]);captchaToken=f(null);stepLabels=["Email","Password","Details"];passwordRules=Je;passwordRuleLabels=tt;stepIndex=J(()=>this.step()==="email"?0:this.step()==="login"?1:2);socialProviderName=J(()=>{let a=this.accountProviders();return a.length===0?"a social provider":a.length===1?a[0]:a.join(" or ")});emailEnabled=B.emailEnabled;emailForm=this.fb.group({email:["",[S.required,S.email]]});loginForm=this.fb.group({password:["",S.required]});registerForm=this.fb.group({firstName:["",S.required],lastName:["",S.required],password:["",[S.required,Ye]],marketingOptIn:[!1]});constructor(){let a=u(Ie).snapshot.queryParams.error;a&&this.errors.set([this.externalErrorMessage(a)]),this.accountService.getExternalProviders().subscribe({next:e=>this.providers.set(e),error:()=>this.providers.set([])})}async continue(){if(!this.emailForm.invalid){this.loading.set(!0),this.errors.set([]);try{let a=this.emailForm.value.email,e=await T(this.accountService.checkEmail(a));this.email.set(a),this.hasPassword.set(e.hasPassword),this.accountProviders.set(e.providers??[]),this.step.set(e.exists?"login":"register"),e.exists&&!e.hasPassword&&setTimeout(()=>document.getElementById("social-signin")?.scrollIntoView({behavior:"smooth",block:"center"}))}catch(a){this.errors.set(this.toMessages(a))}finally{this.loading.set(!1)}}}async signIn(){if(!this.loginForm.invalid){this.loading.set(!0),this.errors.set([]);try{await T(this.accountService.login({email:this.email(),password:this.loginForm.value.password})),await T(this.accountService.getUserInfo()),this.authenticated.emit()}catch(a){this.errors.set(this.toMessages(a))}finally{this.loading.set(!1)}}}async createAccount(){if(!(this.registerForm.invalid||!this.captchaToken())){this.loading.set(!0),this.errors.set([]);try{await T(this.accountService.register({email:this.email(),firstName:this.registerForm.value.firstName,lastName:this.registerForm.value.lastName,password:this.registerForm.value.password,marketingOptIn:this.registerForm.value.marketingOptIn??!1,captchaToken:this.captchaToken()})),await T(this.accountService.getUserInfo()),this.authenticated.emit()}catch(a){this.errors.set(this.toMessages(a)),this.turnstile()?.reset()}finally{this.loading.set(!1)}}}continueWith(a){window.location.href=this.accountService.externalLoginUrl(a,this.returnUrl())}changeEmail(){this.step.set("email"),this.hasPassword.set(!0),this.accountProviders.set([]),this.errors.set([]),this.captchaToken.set(null),this.loginForm.reset(),this.registerForm.reset({marketingOptIn:!1})}externalErrorMessage(a){switch(a){case"cancelled":return"Sign-in was cancelled.";case"no-email":return"We couldn't get an email address from that account, so we can't sign you in with it.";default:return"Sign-in failed. Please try again."}}toMessages(a){return Array.isArray(a)?a.map(e=>e.includes("already taken")?"An account with this email already exists. Go back and sign in.":e):a?.status===429?["Too many attempts. Please wait a minute and try again."]:a?.status===401?["Incorrect email or password."]:["Something went wrong. Please try again."]}passwordRuleMet(a){return et(a,this.registerForm.value.password??"")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-auth-form"]],viewQuery:function(e,n){e&1&&L(n.turnstile,F,5),e&2&&O()},inputs:{returnUrl:[1,"returnUrl"]},outputs:{authenticated:"authenticated"},decls:8,vars:3,consts:[["aria-label","Sign in progress",1,"mb-6","flex","items-center","gap-2"],[1,"space-y-1",3,"formGroup"],[3,"formGroup"],[1,"mt-4","rounded-lg","border","border-red-200","bg-red-50","p-4","text-sm","text-red-700"],["id","social-signin",1,"mt-6"],[1,"flex","items-center","gap-2"],[1,"flex","h-6","w-6","shrink-0","items-center","justify-center","rounded-full","text-[11px]","font-semibold","transition-colors"],[1,"hidden","text-[11px]","font-medium","uppercase","tracking-wide","sm:inline"],["aria-hidden","true",1,"h-px","flex-1","bg-gray-200"],[1,"space-y-1",3,"ngSubmit","formGroup"],[1,"text-2xl","font-semibold"],[1,"mb-4","text-sm","text-gray-500"],["label","Email","type","email","formControlName","email","autocomplete","email"],["mat-flat-button","","type","submit",1,"w-full",3,"disabled"],[1,"mt-2","mb-4","flex","items-center","justify-between","gap-3","rounded-lg","border","border-gray-200","bg-gray-50","px-3","py-2"],[1,"truncate","text-sm","text-gray-700"],["type","button",1,"shrink-0","text-sm","text-gray-500","underline-offset-4","hover:underline",3,"click"],[1,"mb-4","rounded-lg","border","border-blue-200","bg-blue-50","p-4","text-sm","text-blue-900"],[3,"ngSubmit","formGroup"],["label","Password","type","password","formControlName","password","autocomplete","current-password"],[1,"-mt-1","mb-4","text-right"],["routerLink","/account/forgot-password",3,"queryParams"],[1,"font-medium"],[1,"mt-1"],[1,"grid","grid-cols-1","gap-x-3","sm:grid-cols-2"],["label","First name","formControlName","firstName","autocomplete","given-name"],["label","Last name","formControlName","lastName","autocomplete","family-name"],["label","Password","type","password","formControlName","password","autocomplete","new-password"],[1,"mb-4","grid","grid-cols-1","gap-1","text-xs","sm:grid-cols-2"],[1,"flex","items-center","gap-1",3,"text-green-700","text-gray-400"],["formControlName","marketingOptIn",1,"marketing-checkbox","mb-2"],[1,"block","my-4",3,"token"],[1,"flex","items-center","gap-1"],[1,"rule-icon"],[1,"list-disc","space-y-1","ps-4"],[1,"mb-4","flex","items-center","gap-3"],[1,"h-px","flex-1","bg-gray-200"],[1,"text-xs","uppercase","tracking-wide","text-gray-400"],["mat-stroked-button","","type","button",1,"social-button","mb-2","w-full"],["mat-stroked-button","","type","button",1,"social-button","mb-2","w-full",3,"click"],["viewBox","0 0 48 48","aria-hidden","true","focusable","false",1,"social-logo"],[1,"flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-full","bg-gray-200","text-[10px]","font-semibold","text-gray-600"],["fill","#FFC107","d","M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"],["fill","#FF3D00","d","M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z"],["fill","#4CAF50","d","M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"],["fill","#1976D2","d","M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"]],template:function(e,n){if(e&1&&(c(0,"ol",0),P(1,_t,6,17,null,null,V),o(),k(3,ft,8,3,"form",1)(4,Ct,9,2)(5,It,20,4,"form",2),k(6,St,4,0,"div",3),k(7,Pt,8,0,"div",4)),e&2){let i;r(),M(n.stepLabels),r(2),x((i=n.step())==="email"?3:i==="login"?4:i==="register"?5:-1),r(3),x(n.errors().length?6:-1),r(),x(n.providers().length?7:-1)}},dependencies:[Q,qe,j,Oe,Ge,Be,Re,te,G,Ee,W,F],styles:[".marketing-checkbox[_ngcontent-%COMP%]{font-size:.875rem}"]})};export{Ke as a,te as b,$t as c,Je as d,Ye as e,et as f,tt as g,W as h,it as i};
