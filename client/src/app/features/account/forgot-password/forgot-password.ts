import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../../core/services/account-service';
import { TextInput } from '../../../shared/components/text-input/text-input';
import { environment } from '../../../../environments/environment';

// #region Why the same message always
// WHAT IT DOES: asks for the email address and lets the server send a reset
// link to it. The user then clicks the link in the email, which opens the
// reset-password page.
//
// WHY IT ALWAYS SHOWS THE SAME "CHECK YOUR EMAIL" MESSAGE:
// the server never says whether an account exists for the address, because
// that would let anybody find out which addresses are registered (a so called
// "account enumeration" leak). The page therefore looks identical whether the
// address is known or not - the message is worded as "IF an account exists...".
// #endregion
/** The "forgot your password?" page. */
@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, MatCard, MatButton, MatIcon, RouterLink, TextInput],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private activatedRoute = inject(ActivatedRoute)

  /** True while the request is running - the button shows a spinner text. */
  loading = signal(false)

  /** True once the server accepted the request: the "check your email" screen. */
  sent = signal(false)

  /** The error message shown above the button (null = no error). */
  error = signal<string | null>(null)

  // #region Why email is off in production
  // It is false in production: sending real mail needs a sender address on a
  // domain that was verified with the email provider, and there is no such
  // domain yet. The server refuses to send anything there as well, so the
  // page shows a "not available" screen instead of a form that could never
  // work.
  // #endregion
  /** Is the "send a reset email" feature switched on? */
  emailEnabled = environment.emailEnabled

  // #region The pre-filled email address
  // The address is usually pre-filled: the sign-in form puts it into the
  // query string when it links here ("forgot password?" under the password
  // field), so the user does not have to type it again.
  // #endregion
  /** The form holds only the email address. */
  form = this.fb.group({
    email: [this.activatedRoute.snapshot.queryParams['email'] ?? '', [Validators.required, Validators.email]]
  })

  // #region What the emailed link contains
  // The link that arrives contains a single-use token that is valid for 24 hours.
  // Opening it proves that the person owns that inbox, which is the whole point of
  // the flow.
  //
  // WHY THIS TEXT LIVES HERE AND NOT IN forgot-password.html: it used to be a
  // <details> box in the template, which meant every visitor of the page saw a
  // "How this page works" button. The explanation belongs to the source, not to
  // the screen - so it stays here as a region the editor can fold away.
  // #endregion

  // #region What a 200 answer means
  // The API answers 200 even when there is no account for the address, so a
  // successful answer only means "the request was accepted" - the page then
  // shows the "check your email" screen.
  // #endregion
  /** Sends the request to the API. */
  async onSubmit() {
    if (this.form.invalid) return
    this.loading.set(true)
    this.error.set(null)
    try {
      await firstValueFrom(this.accountService.forgotPassword(this.form.value.email!))
      this.sent.set(true)
    } catch (err: any) {
      // 429 = the rate limiter stopped us (too many requests from this IP).
      this.error.set(err?.status === 429
        ? 'Too many attempts. Please wait a minute and try again.'
        : 'Something went wrong. Please try again.')
    } finally {
      this.loading.set(false)
    }
  }
}
