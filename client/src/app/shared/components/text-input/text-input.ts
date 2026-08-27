import { Component, Input, input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';


// **
//  * Reusable input wrapper for mat-form-field.
//  * Grabs the parent form's REAL FormControl via @Self() NgControl,
//  * and binds the inner <input> straight to it — no value copying.
//  * "valueAccessor = this": tells Angular this component handles
//  * reading/writing the control's value (required for formControlName to work).
//  * Generic error messages below work for any field passed in.
//  */

@Component({
  selector: 'app-text-input',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatLabel,
  ],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput implements ControlValueAccessor {
  @Input() label = ''
  @Input() type = 'text'

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }


  //grabs the actual firstName FormControl object
  get control() {
    return this.controlDir.control as FormControl
  }
 
}
