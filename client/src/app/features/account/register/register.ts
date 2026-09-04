import { Component, inject } from '@angular/core';
import { AccountService } from '../../../core/services/account-service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatInput, MatInputModule } from '@angular/material/input';
import { Snackbar } from '../../../core/services/snackbar';
import { TextInput } from "../../../shared/components/text-input/text-input";

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    // MatFormField,
    MatCard,
    // MatInput,
    // MatLabel,
    MatButton,
    TextInput,
],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder)
  private accounService = inject(AccountService)
  private router = inject(Router)
  private snack = inject(Snackbar)
  validationErrors?: string[]

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })


  onSubmit() {
    this.accounService.register(this.registerForm.value).subscribe({
      next: () => {
        this.snack.success('Registration succeeded - you can now log in')
        this.router.navigateByUrl('/account/login')
      },
      error: errors => this.validationErrors = errors
    })

  }


  

}
