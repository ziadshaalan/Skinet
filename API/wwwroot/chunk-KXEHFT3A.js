import{f as Le}from"./chunk-CHYEXBSG.js";import{a as Oe}from"./chunk-MGN2K773.js";import{a as Ce,c as Te,e as Ae,f as E,i as Pe,j as De,m as Me,p as Re,q as ze,s as Ve,u as Ne}from"./chunk-PK2CYUVM.js";import{$ as ie,$a as H,Aa as j,Ab as ke,Ba as y,Bb as O,Ca as C,Cb as pe,Da as re,Db as q,Ea as R,Ec as we,Fa as A,Ga as P,Gb as xe,Ha as u,Hb as w,I as Y,Ia as a,Ib as _e,Ja as r,K as ee,Ka as b,L as te,Lc as Ie,N as h,Na as oe,O as g,P as f,Pc as Ee,Q as D,Qc as Se,R as ne,Ra as F,Sa as se,Ta as k,Tc as Fe,V as B,Va as d,W as M,Wa as z,Xa as V,Z as p,Za as de,_a as Q,_b as ge,ba as ce,bb as N,bc as fe,cb as L,db as me,eb as le,ec as U,fb as x,ga as o,gb as he,gc as ve,hb as s,hc as ye,ib as I,jb as _,n as S,oa as v,pa as ae,qb as be,sb as ue,zb as W}from"./chunk-I2NNZXTW.js";var He=["mat-internal-form-field",""],We=["*"],qe=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,n){i&2&&x("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:He,ngContentSelectors:We,decls:1,vars:0,template:function(i,n){i&1&&(z(),V(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ze=["input"],$e=["label"],Xe=["*"],$={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Ke=new te("mat-checkbox-default-options",{providedIn:"root",factory:()=>$}),l=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(l||{}),X=class{source;checked},K=(()=>{class t{_elementRef=h(ce);_changeDetectorRef=h(xe);_ngZone=h(M);_animationsDisabled=Ie();_options=h(Ke,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new X;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new B;indeterminateChange=new B;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=l.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){h(ye).load(Se);let e=h(new ke("tabindex"),{optional:!0});this._options=this._options||$,this.color=this._options.color||$.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=h(we).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(l.Indeterminate):this._transitionCheckState(this.checked?l.Checked:l.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=p(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,n=this._getAnimationTargetElement();if(!(i===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let m=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(m)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?l.Checked:l.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case l.Init:if(i===l.Checked)return this._animationClasses.uncheckedToChecked;if(i==l.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case l.Unchecked:return i===l.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case l.Checked:return i===l.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case l.Indeterminate:return i===l.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,n){if(i&1&&de(Ze,5)($e,5),i&2){let m;Q(m=H())&&(n._inputElement=m.first),Q(m=H())&&(n._labelElement=m.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,n){i&2&&(se("id",n.id),j("tabindex",null)("aria-label",null)("aria-labelledby",null),he(n.color?"mat-"+n.color:"mat-accent"),x("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",w],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",w],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:_e(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],checked:[2,"checked","checked",w],disabled:[2,"disabled","disabled",w],indeterminate:[2,"indeterminate","indeterminate",w]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[be([{provide:Te,useExisting:Y(()=>t),multi:!0},{provide:Ae,useExisting:t,multi:!0}]),ie],ngContentSelectors:Xe,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,n){if(i&1&&(z(),a(0,"div",3),k("click",function(G){return n._preventBubblingFromLabel(G)}),a(1,"div",4,0)(3,"div",5),k("click",function(){return n._onTouchTargetClick()}),r(),a(4,"input",6,1),k("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(G){return n._onInteractionEvent(G)}),r(),b(6,"div",7),a(7,"div",8),D(),a(8,"svg",9),b(9,"path",10),r(),ne(),b(10,"div",11),r(),b(11,"div",12),r(),a(12,"label",13,2),V(14),r()()),i&2){let m=me(2);u("labelPosition",n.labelPosition),o(4),x("mdc-checkbox--selected",n.checked),u("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),j("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),o(7),u("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),o(),u("for",n.inputId)}},dependencies:[Ee,qe],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),Rt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ee({imports:[K,ve]})}return t})();var Ue=["minLength","lower","upper","digit","symbol"];function Ge(t){let c=t.value??"",e={};return c.length<6&&(e.minLength=!0),/[a-z]/.test(c)||(e.lower=!0),/[A-Z]/.test(c)||(e.upper=!0),/[0-9]/.test(c)||(e.digit=!0),/[^a-zA-Z0-9]/.test(c)||(e.symbol=!0),Object.keys(e).length?{password:e}:null}function Be(t,c){switch(t){case"minLength":return c.length>=6;case"lower":return/[a-z]/.test(c);case"upper":return/[A-Z]/.test(c);case"digit":return/[0-9]/.test(c);case"symbol":return/[^a-zA-Z0-9]/.test(c);default:return!1}}var je={minLength:"At least 6 characters",lower:"A lowercase letter",upper:"An uppercase letter",digit:"A number",symbol:"A special character"};var Ye=["container"],J=null;function et(){return window.turnstile?Promise.resolve():(J??=new Promise((t,c)=>{let e=document.createElement("script");e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",e.async=!0,e.onload=()=>t(),e.onerror=()=>{J=null,c(new Error("Turnstile failed to load"))},document.head.appendChild(e)}),J)}var T=class t{token=O();zone=h(M);container=q.required("container");widgetId;destroyed=!1;async ngAfterViewInit(){try{await et()}catch{return}this.destroyed||(this.widgetId=window.turnstile.render(this.container().nativeElement,{sitekey:U.turnstileSiteKey,callback:c=>this.zone.run(()=>this.token.emit(c)),"expired-callback":()=>this.zone.run(()=>this.token.emit(null)),"error-callback":()=>this.zone.run(()=>this.token.emit(null))}))}reset(){this.widgetId&&(window.turnstile.reset(this.widgetId),this.token.emit(null))}ngOnDestroy(){this.destroyed=!0,this.widgetId&&window.turnstile?.remove(this.widgetId)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-turnstile"]],viewQuery:function(e,i){e&1&&N(i.container,Ye,5),e&2&&L()},outputs:{token:"token"},decls:2,vars:0,consts:[["container",""]],template:function(e,i){e&1&&oe(0,"div",null,0)},encapsulation:2})};var tt=t=>({email:t});function nt(t,c){t&1&&b(0,"li",8)}function it(t,c){if(t&1&&(a(0,"li",5)(1,"span",6),s(2),r(),a(3,"span",7),s(4),r()(),y(5,nt,1,0,"li",8)),t&2){let e=c.$implicit,i=c.$index,n=d();o(),le("background-color",i<=n.stepIndex()?"var(--mat-sys-primary)":"")("color",i<=n.stepIndex()?"var(--mat-sys-on-primary)":""),x("border",i>n.stepIndex())("border-gray-300",i>n.stepIndex())("text-gray-400",i>n.stepIndex()),o(),I(i+1),o(),x("text-gray-900",i===n.stepIndex())("text-gray-400",i!==n.stepIndex()),o(),I(e),o(),C(i<n.stepLabels.length-1?5:-1)}}function ct(t,c){if(t&1){let e=F();a(0,"form",9),k("ngSubmit",function(){g(e);let n=d();return f(n.continue())}),a(1,"h1",10),s(2,"Sign in or create an account"),r(),a(3,"p",11),s(4," Enter your email and we will take it from there. "),r(),b(5,"app-text-input",12),a(6,"button",13),s(7),r()()}if(t&2){let e=d();u("formGroup",e.emailForm),o(6),u("disabled",e.emailForm.invalid||e.loading()),o(),_(" ",e.loading()?"One moment...":"Continue"," ")}}function at(t,c){if(t&1&&(a(0,"div",20)(1,"a",21),s(2,"Forgot password?"),r()()),t&2){let e=d(3);o(),u("queryParams",ue(1,tt,e.email()))}}function rt(t,c){if(t&1){let e=F();a(0,"form",18),k("ngSubmit",function(){g(e);let n=d(2);return f(n.signIn())}),b(1,"app-text-input",19),y(2,at,3,3,"div",20),a(3,"button",13),s(4),r()()}if(t&2){let e=d(2);u("formGroup",e.loginForm),o(2),C(e.emailEnabled?2:-1),o(),u("disabled",e.loginForm.invalid||e.loading()),o(),_(" ",e.loading()?"Signing in...":"Sign in"," ")}}function ot(t,c){if(t&1&&(a(0,"div",17)(1,"p",22),s(2),r(),a(3,"p",23),s(4," It has no password, so please press "),a(5,"strong"),s(6),r(),s(7," below to sign in. "),r()()),t&2){let e=d(2);o(2),_("This account was created with ",e.socialProviderName(),"."),o(4),_("Continue with ",e.socialProviderName())}}function st(t,c){if(t&1){let e=F();a(0,"h1",10),s(1,"Welcome back"),r(),a(2,"div",14)(3,"span",15),s(4),r(),a(5,"button",16),k("click",function(){g(e);let n=d();return f(n.changeEmail())}),s(6,"Change"),r()(),y(7,rt,5,4,"form",2)(8,ot,8,2,"div",17)}if(t&2){let e=d();o(4),I(e.email()),o(3),C(e.hasPassword()?7:8)}}function dt(t,c){if(t&1&&(a(0,"li",32)(1,"mat-icon",33),s(2),r(),a(3,"span"),s(4),r()()),t&2){let e=c.$implicit,i=d(2);x("text-green-700",i.passwordRuleMet(e))("text-gray-400",!i.passwordRuleMet(e)),o(2),_(" ",i.passwordRuleMet(e)?"check_circle":"radio_button_unchecked"," "),o(2),I(i.passwordRuleLabels[e])}}function mt(t,c){if(t&1){let e=F();a(0,"form",18),k("ngSubmit",function(){g(e);let n=d();return f(n.createAccount())}),a(1,"h1",10),s(2,"Create your account"),r(),a(3,"div",14)(4,"span",15),s(5),r(),a(6,"button",16),k("click",function(){g(e);let n=d();return f(n.changeEmail())}),s(7,"Change"),r()(),a(8,"div",24),b(9,"app-text-input",25)(10,"app-text-input",26),r(),b(11,"app-text-input",27),a(12,"ul",28),A(13,dt,5,6,"li",29,R),r(),a(15,"mat-checkbox",30),s(16," Send me news and offers by email "),r(),a(17,"app-turnstile",31),k("token",function(n){g(e);let m=d();return f(m.captchaToken.set(n))}),r(),a(18,"button",13),s(19),r()()}if(t&2){let e=d();u("formGroup",e.registerForm),o(5),I(e.email()),o(8),P(e.passwordRules),o(5),u("disabled",e.registerForm.invalid||!e.captchaToken()||e.loading()),o(),_(" ",e.loading()?"Creating your account...":"Create account"," ")}}function lt(t,c){if(t&1&&(a(0,"li"),s(1),r()),t&2){let e=c.$implicit;o(),I(e)}}function ht(t,c){if(t&1&&(a(0,"div",3)(1,"ul",34),A(2,lt,2,1,"li",null,re),r()()),t&2){let e=d();o(2),P(e.errors())}}function bt(t,c){t&1&&(D(),a(0,"svg",40),b(1,"path",42)(2,"path",43)(3,"path",44)(4,"path",45),r())}function ut(t,c){if(t&1&&(a(0,"span",41),s(1),r()),t&2){let e=d().$implicit;o(),_(" ",e.charAt(0)," ")}}function kt(t,c){if(t&1){let e=F();a(0,"button",39),k("click",function(){let n=g(e).$implicit,m=d(2);return f(m.continueWith(n))}),y(1,bt,5,0,":svg:svg",40)(2,ut,2,1,"span",41),a(3,"span"),s(4),r()()}if(t&2){let e,i=c.$implicit;o(),C((e=i)==="Google"?1:2),o(3),_("Continue with ",i)}}function pt(t,c){if(t&1&&(a(0,"div",4)(1,"div",35),b(2,"span",36),a(3,"span",37),s(4,"or"),r(),b(5,"span",36),r(),A(6,kt,5,2,"button",38,R),r()),t&2){let e=d();o(6),P(e.providers())}}var Qe=class t{fb=h(Ve);accountService=h(Le);turnstile=q(T);returnUrl=pe("/shop");authenticated=O();step=p("email");email=p("");hasPassword=p(!0);accountProviders=p([]);providers=p([]);loading=p(!1);errors=p([]);captchaToken=p(null);stepLabels=["Email","Password","Details"];passwordRules=Ue;passwordRuleLabels=je;stepIndex=W(()=>this.step()==="email"?0:this.step()==="login"?1:2);socialProviderName=W(()=>{let c=this.accountProviders();return c.length===0?"a social provider":c.length===1?c[0]:c.join(" or ")});emailEnabled=U.emailEnabled;emailForm=this.fb.group({email:["",[E.required,E.email]]});loginForm=this.fb.group({password:["",E.required]});registerForm=this.fb.group({firstName:["",E.required],lastName:["",E.required],password:["",[E.required,Ge]],marketingOptIn:[!1]});constructor(){let c=h(ge).snapshot.queryParams.error;c&&this.errors.set([this.externalErrorMessage(c)]),this.accountService.getExternalProviders().subscribe({next:e=>this.providers.set(e),error:()=>this.providers.set([])})}async continue(){if(!this.emailForm.invalid){this.loading.set(!0),this.errors.set([]);try{let c=this.emailForm.value.email,e=await S(this.accountService.checkEmail(c));this.email.set(c),this.hasPassword.set(e.hasPassword),this.accountProviders.set(e.providers??[]),this.step.set(e.exists?"login":"register"),e.exists&&!e.hasPassword&&setTimeout(()=>document.getElementById("social-signin")?.scrollIntoView({behavior:"smooth",block:"center"}))}catch(c){this.errors.set(this.toMessages(c))}finally{this.loading.set(!1)}}}async signIn(){if(!this.loginForm.invalid){this.loading.set(!0),this.errors.set([]);try{await S(this.accountService.login({email:this.email(),password:this.loginForm.value.password})),await S(this.accountService.getUserInfo()),this.authenticated.emit()}catch(c){this.errors.set(this.toMessages(c))}finally{this.loading.set(!1)}}}async createAccount(){if(!(this.registerForm.invalid||!this.captchaToken())){this.loading.set(!0),this.errors.set([]);try{await S(this.accountService.register({email:this.email(),firstName:this.registerForm.value.firstName,lastName:this.registerForm.value.lastName,password:this.registerForm.value.password,marketingOptIn:this.registerForm.value.marketingOptIn??!1,captchaToken:this.captchaToken()})),await S(this.accountService.getUserInfo()),this.authenticated.emit()}catch(c){this.errors.set(this.toMessages(c)),this.turnstile()?.reset()}finally{this.loading.set(!1)}}}continueWith(c){window.location.href=this.accountService.externalLoginUrl(c,this.returnUrl())}changeEmail(){this.step.set("email"),this.hasPassword.set(!0),this.accountProviders.set([]),this.errors.set([]),this.captchaToken.set(null),this.loginForm.reset(),this.registerForm.reset({marketingOptIn:!1})}externalErrorMessage(c){switch(c){case"cancelled":return"Sign-in was cancelled.";case"no-email":return"We couldn't get an email address from that account, so we can't sign you in with it.";default:return"Sign-in failed. Please try again."}}toMessages(c){return Array.isArray(c)?c.map(e=>e.includes("already taken")?"An account with this email already exists. Go back and sign in.":e):c?.status===429?["Too many attempts. Please wait a minute and try again."]:c?.status===401?["Incorrect email or password."]:["Something went wrong. Please try again."]}passwordRuleMet(c){return Be(c,this.registerForm.value.password??"")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-auth-form"]],viewQuery:function(e,i){e&1&&N(i.turnstile,T,5),e&2&&L()},inputs:{returnUrl:[1,"returnUrl"]},outputs:{authenticated:"authenticated"},decls:8,vars:3,consts:[["aria-label","Sign in progress",1,"mb-6","flex","items-center","gap-2"],[1,"space-y-1",3,"formGroup"],[3,"formGroup"],[1,"mt-4","rounded-lg","border","border-red-200","bg-red-50","p-4","text-sm","text-red-700"],["id","social-signin",1,"mt-6"],[1,"flex","items-center","gap-2"],[1,"flex","h-6","w-6","shrink-0","items-center","justify-center","rounded-full","text-[11px]","font-semibold","transition-colors"],[1,"hidden","text-[11px]","font-medium","uppercase","tracking-wide","sm:inline"],["aria-hidden","true",1,"h-px","flex-1","bg-gray-200"],[1,"space-y-1",3,"ngSubmit","formGroup"],[1,"text-2xl","font-semibold"],[1,"mb-4","text-sm","text-gray-500"],["label","Email","type","email","formControlName","email","autocomplete","email"],["mat-flat-button","","type","submit",1,"w-full",3,"disabled"],[1,"mt-2","mb-4","flex","items-center","justify-between","gap-3","rounded-lg","border","border-gray-200","bg-gray-50","px-3","py-2"],[1,"truncate","text-sm","text-gray-700"],["type","button",1,"shrink-0","text-sm","text-gray-500","underline-offset-4","hover:underline",3,"click"],[1,"mb-4","rounded-lg","border","border-blue-200","bg-blue-50","p-4","text-sm","text-blue-900"],[3,"ngSubmit","formGroup"],["label","Password","type","password","formControlName","password","autocomplete","current-password"],[1,"-mt-1","mb-4","text-right"],["routerLink","/account/forgot-password",3,"queryParams"],[1,"font-medium"],[1,"mt-1"],[1,"grid","grid-cols-1","gap-x-3","sm:grid-cols-2"],["label","First name","formControlName","firstName","autocomplete","given-name"],["label","Last name","formControlName","lastName","autocomplete","family-name"],["label","Password","type","password","formControlName","password","autocomplete","new-password"],[1,"mb-4","grid","grid-cols-1","gap-1","text-xs","sm:grid-cols-2"],[1,"flex","items-center","gap-1",3,"text-green-700","text-gray-400"],["formControlName","marketingOptIn",1,"marketing-checkbox","mb-2"],[1,"block","my-4",3,"token"],[1,"flex","items-center","gap-1"],[1,"rule-icon"],[1,"list-disc","space-y-1","ps-4"],[1,"mb-4","flex","items-center","gap-3"],[1,"h-px","flex-1","bg-gray-200"],[1,"text-xs","uppercase","tracking-wide","text-gray-400"],["mat-stroked-button","","type","button",1,"social-button","mb-2","w-full"],["mat-stroked-button","","type","button",1,"social-button","mb-2","w-full",3,"click"],["viewBox","0 0 48 48","aria-hidden","true","focusable","false",1,"social-logo"],[1,"flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-full","bg-gray-200","text-[10px]","font-semibold","text-gray-600"],["fill","#FFC107","d","M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"],["fill","#FF3D00","d","M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z"],["fill","#4CAF50","d","M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"],["fill","#1976D2","d","M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"]],template:function(e,i){if(e&1&&(a(0,"ol",0),A(1,it,6,17,null,null,R),r(),y(3,ct,8,3,"form",1)(4,st,9,2)(5,mt,20,4,"form",2),y(6,ht,4,0,"div",3),y(7,pt,8,0,"div",4)),e&2){let n;o(),P(i.stepLabels),o(2),C((n=i.step())==="email"?3:n==="login"?4:n==="register"?5:-1),o(3),C(i.errors().length?6:-1),o(),C(i.providers().length?7:-1)}},dependencies:[Ne,Me,Pe,De,ze,Re,Fe,K,Ce,fe,Oe,T],styles:[".marketing-checkbox[_ngcontent-%COMP%]{font-size:.875rem}"]})};export{qe as a,K as b,Rt as c,Ue as d,Ge as e,Be as f,je as g,Qe as h};
