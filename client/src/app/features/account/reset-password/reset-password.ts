import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../../core/services/account-service';
import { Snackbar } from '../../../core/services/snackbar';
import {
  PASSWORD_RULES,
  PASSWORD_RULE_LABELS,
  PasswordRule,
  passwordRuleMet,
  passwordRulesValidator
} from '../../../shared/validators/password-rules.validator';
import { TextInput } from '../../../shared/components/text-input/text-input';
import { environment } from '../../../../environments/environment';

// #region The link from the email
// THE PAGE IS OPENED FROM THE EMAIL: the reset link that the server sent
// contains both the address and a one time token:
//
//   /account/reset-password?email=someone%40example.com&token=CfDJ8...
//
// The token is the proof that this browser really is the one that received the
// mail. The server checks it when the new password arrives, and a token can
// only be used once and only for a limited time (24 hours).
// #endregion
// #region What happens after the password changed
// A token can be used only once and only for 24 hours. After the password is
// changed the server also updates the account's security stamp, so anybody who
// was signed in with the old password is signed out.
//
// WHY THIS TEXT LIVES HERE AND NOT IN reset-password.html: it used to be a
// <details> box in the template, which meant every visitor of the page saw a
// "How this page works" button. The explanation belongs to the source, not to
// the screen - so it stays here as a region the editor can fold away.
// #endregion
/** The "choose a new password" page. */
@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, MatCard, MatButton, MatIcon, RouterLink, TextInput],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private snack = inject(Snackbar)

  // #region Why a snapshot is enough
  // They are read from the query string with snapshot because the page is
  // opened once with the link - there is no need to react to later changes.
  // #endregion
  /** The email and the token come from the link in the email. */
  email: string = this.activatedRoute.snapshot.queryParams['email'] ?? ''
  token: string = this.activatedRoute.snapshot.queryParams['token'] ?? ''

  // #region When the link was cut off
  // If either the address or the token is missing the link was cut off (for
  // example by a mail client that broke the long url). In that case the form
  // is not even shown - the user is asked for a new link instead.
  // #endregion
  /** Is the link complete? */
  linkIsComplete = !!this.email && !!this.token

  /** True while the request is running. */
  loading = signal(false)

  /** The error messages shown below the field. */
  errors = signal<string[]>([])

  /** The password rules, for the checklist under the input. */
  passwordRules = PASSWORD_RULES

  /** The readable text of each rule for the checklist. */
  passwordRuleLabels = PASSWORD_RULE_LABELS

  // #region Why email is off in production
  // The feature is off in production (no verified sending domain yet), so the
  // "Request a new link" button is replaced by a link back to the sign-in page.
  // #endregion
  /** Can a new reset link still be requested from this page? */
  emailEnabled = environment.emailEnabled

  // #region The rules checked while typing
  // The same rules as on the sign-up page are checked while typing, so the
  // user sees what is missing before pressing the button.
  // #endregion
  /** The new password. */
  form = this.fb.group({
    password: ['', [Validators.required, passwordRulesValidator]]
  })

  /** Sends the new password with the token to the API. */
  async onSubmit() {
    if (this.form.invalid) return
    this.loading.set(true)
    this.errors.set([])
    try {
      await firstValueFrom(this.accountService.resetPassword({
        email: this.email,
        token: this.token,
        newPassword: this.form.value.password!
      }))
      this.snack.success('Password changed. You can now sign in.')
      this.router.navigateByUrl('/account/login')
    } catch (err) {
      this.errors.set(this.toMessages(err))
    } finally {
      this.loading.set(false)
    }
  }

  /** Is this password rule satisfied? Used to tick the boxes under the field. */
  passwordRuleMet(rule: string): boolean {
    return passwordRuleMet(rule as PasswordRule, this.form.value.password ?? '');
  }

  // #region The expired link messages
  // The error interceptor already flattens the server's validation errors
  // into a plain string[], so most answers arrive in the right shape. The
  // messages that mention the token or the link are replaced with a more
  // helpful text, because the most common reason is an expired link.
  // #endregion
  /** Turns whatever the HTTP layer threw into a list of readable messages. */
  private toMessages(err: any): string[] {
    if (Array.isArray(err)) {
      return err.map(m => /token|link/i.test(m)
        ? 'This link is invalid or has expired. Please request a new one.'
        : m)
    }
    if (err?.status === 429) return ['Too many attempts. Please wait a minute and try again.']
    return ['Something went wrong. Please try again.']
  }
}
