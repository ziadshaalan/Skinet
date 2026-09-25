import { Component, Input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule
} from '@angular/forms';

import { MatInput } from '@angular/material/input';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix
} from '@angular/material/form-field';

import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

/*
  * Reusable form input component used across the application.
  *
  * Instead of creating a separate <mat-form-field> and <input> for
  * every field in each page, this component provides the common
  * input UI and validation in one place.
  *
  * The parent component provides values such as:
  *   label="Password"
  *   type="password"
  *   formControlName="password"
  *
  * Example from Register:
  *
  * <app-text-input
  *   formControlName="password"
  *   label="Password"
  *   type="password">
  * </app-text-input>
  *
  * The component then gets the actual FormControl through NgControl
  * and binds it to the inner Material input.
  *
  * It also provides common features such as validation messages
  * and password visibility toggling.
  */

@Component({
  selector: 'app-text-input',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatLabel,
    MatSuffix,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput implements ControlValueAccessor {

  @Input() label = '';
  @Input() type = 'text';

  hidePassword = true;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  get control() {
    return this.controlDir.control as FormControl;
  }
}