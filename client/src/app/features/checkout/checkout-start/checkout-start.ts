import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../../core/services/account-service';
import { GuestSession } from '../../../core/services/guest-session';
import { AuthForm } from '../../../shared/components/auth-form/auth-form';
import { TextInput } from '../../../shared/components/text-input/text-input';

// ===== CheckoutStart: the screen a logged-out user sees on Checkout (sign in OR guest email) =====
@Component({
  selector: 'app-checkout-start',
  imports: [ReactiveFormsModule, MatButton, MatCard, AuthForm, TextInput],
  templateUrl: './checkout-start.html',
})
export class CheckoutStart {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private accountService = inject(AccountService)
  private guestSession = inject(GuestSession)

  loading = signal(false)

  // True after check-email found an account for the typed email (shows the hint)
  accountExists = signal(false)

  guestForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  constructor() {
    // Already signed in (e.g. back from Google): nothing to choose, go straight to checkout
    if (this.accountService.currentUser()) this.router.navigateByUrl('/checkout')

    // Typing a different email resets the hint, so the new email is checked again
    this.guestForm.controls.email.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.accountExists.set(false))
  }

  // Guest button: first click checks for an existing account, second click ("anyway") goes through
  async continueAsGuest() {
    if (this.guestForm.invalid) return
    const email = this.guestForm.value.email!.trim()

    // The hint was already shown for this email, so go straight through
    if (this.accountExists()) return this.goAsGuest(email)

    this.loading.set(true)
    try {
      const result = await firstValueFrom(this.accountService.checkEmail(email))
      if (result.exists) {
        this.accountExists.set(true)
        return
      }
    } catch {
      // The hint is optional: if check-email fails (e.g. rate limit), never block the guest
    } finally {
      this.loading.set(false)
    }

    this.goAsGuest(email)
  }

  // Save the email for this tab and continue to the normal checkout
  private goAsGuest(email: string) {
    this.guestSession.set(email)
    this.router.navigateByUrl('/checkout')
  }

  // Signed in through the form: the guest email is no longer needed
  onAuthenticated() {
    this.guestSession.clear()
    this.router.navigateByUrl('/checkout')
  }
}