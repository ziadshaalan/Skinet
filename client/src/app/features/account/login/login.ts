import { Component, inject } from '@angular/core';
import { AccountService } from '../../../core/services/account-service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatCard,
    MatInput,
    MatLabel,
    MatButton
    
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)
  returnUrl = '/shop'


  constructor () {
      const url = this.activatedRoute.snapshot.queryParams['returnUrl']
      if (url) this.returnUrl = url
    }


  loginForm = this.fb.group({
    email: [''],
    password: [''],

  })

  async onSubmit() {
    await firstValueFrom(this.accountService.login(this.loginForm.value))

    await firstValueFrom(this.accountService.getUserInfo())

    if (this.accountService.isAdmin()) {
      this.router.navigateByUrl('/admin')
      return
    }
     this.router.navigateByUrl(this.returnUrl);
  }

  

}
