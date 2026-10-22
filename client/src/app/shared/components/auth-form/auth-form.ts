import { Component, computed, inject, input, output, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../../core/services/account-service';
import {
  PASSWORD_RULES,
  PASSWORD_RULE_LABELS,
  PasswordRule,
  passwordRuleMet,
  passwordRulesValidator
} from '../../validators/password-rules.validator';
import { TextInput } from '../text-input/text-input';
import { Turnstile } from '../turnstile/turnstile';
import { environment } from '../../../../environments/environment';

// #region The three sign-in screens
//  'email'   - the only step everybody sees first: "type your email".
//  'login'   - the account exists and has a password -> ask for it.
//  'register'- the account does not exist yet -> ask for the details to create it.
//
// WHICH STEP COMES NEXT IS DECIDED BY THE API, NOT BY THE FORM.
// That is the whole idea behind the "email-first" flow: the user types one field,
// the server answers "this account exists / does not exist", and the form shows
// the right screen. One form instead of a separate login page and register page.
// #endregion
// #region What the server answers
// The form asks for the email first and lets the SERVER decide what happens
// next. The server answers "check-email" with:
//   exists = false              -> the "create your account" screen
//   exists = true, hasPassword  -> the password screen
//   exists = true, no password  -> the account was made with a social
//                                  provider, so the form points at that button
//                                  instead of asking for a password that does
//                                  not exist
//
// WHY THIS TEXT LIVES HERE AND NOT IN auth-form.html: it used to be a <details>
// box in the template, which meant every visitor of the sign-in page saw a
// "How this form works" button. The explanation belongs to the source, not to
// the screen - so it stays here as a region the editor can fold away.
// #endregion
/** The three screens the sign-in form can show. */
type Step = 'email' | 'login' | 'register';

// #region Why the form is shared
// It is a shared component (client/src/app/shared/components) because three
// pages need it: the login page, and - in the future - a popup or a checkout
// drawer. The page around it decides what happens after a successful sign-in
// through the `authenticated` output event.
//
// The password rules live in shared/validators/password-rules.validator.ts,
// so the sign-up form and the "reset your password" form use exactly the
// same rules as the server.
// #endregion
/** The shared sign-in / sign-up form. */
@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, MatButton, MatCheckbox, MatIcon, RouterLink, TextInput, Turnstile],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css',
})
export class AuthForm {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private turnstile = viewChild(Turnstile)

  /** Where the user should land after signing in (e.g. the checkout page). */
  returnUrl = input('/shop')

  /** The parent decides where to go next once we are signed in. */
  authenticated = output<void>()

  // -------------------------------------------------------------------
  // State
  // -------------------------------------------------------------------
  step = signal<Step>('email')      // which screen is showing
  email = signal('')                // the address typed on the first screen
  hasPassword = signal(true)        // false for accounts that came from a social provider
  accountProviders = signal<string[]>([])  // the providers this account is linked to
  providers = signal<string[]>([])  // social buttons to draw (asked from the API)
  loading = signal(false)           // true while a request is in flight
  errors = signal<string[]>([])     // messages shown above/below the form
  captchaToken = signal<string | null>(null)  // the Turnstile token for the register step

  /** Labels of the three steps, used by the little progress indicator. */
  stepLabels = ['Email', 'Password', 'Details']

  /** The password rules, used to draw the checklist under the password field. */
  passwordRules = PASSWORD_RULES

  /** The readable text of each rule for the checklist. */
  passwordRuleLabels = PASSWORD_RULE_LABELS

  /** 0 = email, 1 = password, 2 = details. Used to highlight the progress indicator. */
  stepIndex = computed(() => (this.step() === 'email' ? 0 : this.step() === 'login' ? 1 : 2))

  // #region Why the provider name exists
  // WHY THIS EXISTS: an account that was created with a social provider has no
  // password, so the form cannot ask for one. Instead it tells the person
  // exactly which button to press - "you signed up with Google, press Continue
  // with Google" - instead of a vague "use the provider you signed up with".
  // #endregion
  /** The name of the provider the account was created with, as one readable phrase: "Google". */
  socialProviderName = computed(() => {
    const names = this.accountProviders()
    if (names.length === 0) return 'a social provider'
    if (names.length === 1) return names[0]
    return names.join(' or ')
  })

  emailEnabled = environment.emailEnabled

  // -------------------------------------------------------------------
  // Forms
  // -------------------------------------------------------------------
  // Three separate forms (one per screen) instead of one big form with
  // hidden fields: each screen then only validates what it actually shows.

  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  loginForm = this.fb.group({
    password: ['', Validators.required]
  })

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, passwordRulesValidator]],
    marketingOptIn: [false]
  })

  constructor() {
    // the API redirects here with ?error=... when a social sign-in fails
    const reason = inject(ActivatedRoute).snapshot.queryParams['error']
    if (reason) this.errors.set([this.externalErrorMessage(reason)])

    // Ask the API which social providers are configured on this server.
    // A provider without a client id cannot work, so the button should not
    // be drawn at all - a dead button is worse than no button.
    this.accountService.getExternalProviders().subscribe({
      next: providers => this.providers.set(providers),
      error: () => this.providers.set([])
    })
  }

  // -------------------------------------------------------------------
  // Step 1 - email
  // -------------------------------------------------------------------

  // #region Which step comes next
  // The API answers { exists, hasPassword, providers }:
  //   exists = false            -> show the "create your account" screen
  //   exists = true, hasPassword-> show the "type your password" screen
  //   exists = true, no password-> the account was created with a social
  //                               provider, so the form asks the person to use
  //                               that provider again (the 'login' screen)
  // #endregion
  /** Sends the email to the API and moves to the next screen. */
  async continue() {
    if (this.emailForm.invalid) return
    this.loading.set(true)
    this.errors.set([])
    try {
      const email = this.emailForm.value.email!
      const result = await firstValueFrom(this.accountService.checkEmail(email))
      this.email.set(email)
      this.hasPassword.set(result.hasPassword)
      this.accountProviders.set(result.providers ?? [])
      this.step.set(result.exists ? 'login' : 'register')

      // The account has no password, so the social button below is the only way
      // in. Scrolling to it saves the person from hunting for it.
      if (result.exists && !result.hasPassword) {
        setTimeout(() => document.getElementById('social-signin')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
      }
    } catch (err) {
      this.errors.set(this.toMessages(err))
    } finally {
      this.loading.set(false)
    }
  }

  // -------------------------------------------------------------------
  // Step 2 - password
  // -------------------------------------------------------------------

  /** Signs in with the email from step 1 and the password typed here. */
  async signIn() {
    if (this.loginForm.invalid) return
    this.loading.set(true)
    this.errors.set([])
    try {
      await firstValueFrom(this.accountService.login({
        email: this.email(),
        // The "!" is safe here: the form is only valid when the password is
        // filled in, and we checked form.invalid above.
        password: this.loginForm.value.password!
      }))
      // The header shows the user's email, so the profile has to be loaded
      // before we navigate away.
      await firstValueFrom(this.accountService.getUserInfo())
      this.authenticated.emit()
    } catch (err) {
      this.errors.set(this.toMessages(err))
    } finally {
      this.loading.set(false)
    }
  }

  // -------------------------------------------------------------------
  // Step 3 - create the account
  // -------------------------------------------------------------------

  // #region Captcha token handling
  // The captcha token is required: without it the server refuses to create
  // the account. A Turnstile token can only be used once, so when the server
  // rejects the request the widget is reset and the user solves it again.
  // #endregion
  /** Creates the account. */
  async createAccount() {
    if (this.registerForm.invalid || !this.captchaToken()) return
    this.loading.set(true)
    this.errors.set([])
    try {
      // The fields are sent one by one (instead of spreading the form value)
      // because a spread of a typed form produces optional properties, and
      // the API expects real values. The "!" is safe: the form was checked
      // above and every field has a "required" validator.
      await firstValueFrom(this.accountService.register({
        email: this.email(),
        firstName: this.registerForm.value.firstName!,
        lastName: this.registerForm.value.lastName!,
        password: this.registerForm.value.password!,
        marketingOptIn: this.registerForm.value.marketingOptIn ?? false,
        captchaToken: this.captchaToken()!
      }))
      await firstValueFrom(this.accountService.getUserInfo())
      this.authenticated.emit()
    } catch (err) {
      this.errors.set(this.toMessages(err))
      this.turnstile()?.reset()   // a captcha token works only once
    } finally {
      this.loading.set(false)
    }
  }

  // -------------------------------------------------------------------
  // Social sign-in
  // -------------------------------------------------------------------

  // #region Why the browser leaves the app
  // This is NOT an HTTP call: the browser has to LEAVE the app, go to Google,
  // come back and finally land on our callback. A fetch() would be killed by
  // the browser as soon as the page navigates away, so the address of the
  // API's redirect endpoint is put into the location bar instead.
  // #endregion
  /** Starts a social sign-in. */
  continueWith(provider: string) {
    window.location.href = this.accountService.externalLoginUrl(provider, this.returnUrl())
  }

  // -------------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------------

  /** Goes back to the email screen so a different address can be used. */
  changeEmail() {
    this.step.set('email')
    this.hasPassword.set(true)
    this.accountProviders.set([])
    this.errors.set([])
    this.captchaToken.set(null)
    this.loginForm.reset()
    this.registerForm.reset({ marketingOptIn: false })
  }

  /** The text shown when the social provider sends back an error reason. */
  private externalErrorMessage(reason: string): string {
    switch (reason) {
      case 'cancelled':
        return 'Sign-in was cancelled.'
      case 'no-email':
        return "We couldn't get an email address from that account, so we can't sign you in with it."
      default:
        return 'Sign-in failed. Please try again.'
    }
  }

  // #region How the errors arrive
  // The error interceptor already flattens the server's validation errors
  // ({"errors": {...}}) into a plain string[], so most 400 answers arrive
  // already in the right shape. The other cases (rate limit, wrong password)
  // are recognised by their status code.
  // #endregion
  /** Turns whatever the HTTP layer threw into a list of readable messages. */
  private toMessages(err: any): string[] {
    // 400 validation errors arrive as string[] (the error interceptor flattens them)
    if (Array.isArray(err)) {
      return err.map(m => m.includes('already taken')
        ? 'An account with this email already exists. Go back and sign in.'
        : m)
    }
    if (err?.status === 429) return ['Too many attempts. Please wait a minute and try again.']
    if (err?.status === 401) return ['Incorrect email or password.']
    return ['Something went wrong. Please try again.']
  }

  /** Is this password rule satisfied? Used to tick the boxes under the field. */
  passwordRuleMet(rule: string): boolean {
    return passwordRuleMet(rule as PasswordRule, this.registerForm.value.password ?? '');
  }
}
