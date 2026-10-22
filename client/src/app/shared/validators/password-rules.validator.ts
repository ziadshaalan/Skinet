import { AbstractControl, ValidationErrors } from '@angular/forms';

// #region Why a shared file
// WHY A SHARED FILE: the server is the only place that really validates the
// password, but the user should see the problems WHILE TYPING and not only
// after pressing the button. To do that the browser has to know the same
// rules. Keeping them here means the sign-up form and the "reset your
// password" form cannot drift apart.
//
// THE RULES (they must match API/Program.cs -> IdentityOptions.Password):
//   - at least 6 characters
//   - one lowercase letter
//   - one uppercase letter
//   - one digit
//   - one special character
//
// This is a convenience, never a security measure: the server checks the
// password again and rejects it if it does not fit.
// #endregion
/** The password rules of the application, in one place. */
export const PASSWORD_RULES = ['minLength', 'lower', 'upper', 'digit', 'symbol'] as const;

export type PasswordRule = (typeof PASSWORD_RULES)[number];

// #region Collecting the broken rules
// All broken rules are collected under one key ("password"), so the form
// control has a single error object the template can look at.
// #endregion
/** A validator that checks a password against the rules above. */
export function passwordRulesValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value ?? '';
  const errors: ValidationErrors = {};

  if (value.length < 6) errors['minLength'] = true;
  if (!/[a-z]/.test(value)) errors['lower'] = true;
  if (!/[A-Z]/.test(value)) errors['upper'] = true;
  if (!/[0-9]/.test(value)) errors['digit'] = true;
  if (!/[^a-zA-Z0-9]/.test(value)) errors['symbol'] = true;

  return Object.keys(errors).length ? { password: errors } : null;
}

// #region Ticking the checklist boxes
// Used to tick the boxes under the input, so the user sees which rules are
// still missing.
// #endregion
/** Is this single rule satisfied by the given password? */
export function passwordRuleMet(rule: PasswordRule, password: string): boolean {
  switch (rule) {
    case 'minLength': return password.length >= 6;
    case 'lower': return /[a-z]/.test(password);
    case 'upper': return /[A-Z]/.test(password);
    case 'digit': return /[0-9]/.test(password);
    case 'symbol': return /[^a-zA-Z0-9]/.test(password);
    default: return false;
  }
}

/** The readable text of each rule, for the checklist under the input. */
export const PASSWORD_RULE_LABELS: Record<PasswordRule, string> = {
  minLength: 'At least 6 characters',
  lower: 'A lowercase letter',
  upper: 'An uppercase letter',
  digit: 'A number',
  symbol: 'A special character'
};
