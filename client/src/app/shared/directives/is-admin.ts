import { Directive, effect, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../../core/services/account-service';

@Directive({
  selector: '[appIsAdmin]', //It means Angular should attach this directive to elements containing: [appIsAdmin]
})
export class IsAdmin{
  private accountService = inject(AccountService)
  private viewContainerRef = inject(ViewContainerRef) //This is the place where Angular can insert/remove views.
  private templateRef = inject(TemplateRef) //"the Admin link template that this directive is attached to."

//  ngOnInit → "check this once, "
//  effect → "run this, and run it again when the signals is used changes, (IsAdmin is a signal)"
  constructor() {
    effect(() => {
       if (this.accountService.isAdmin()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear() //Remove the view from the page.
    }
    })
   }

  }
