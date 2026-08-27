import { Component, inject, input } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Busy } from '../../core/services/busy';
import { CartService } from '../../core/services/cart-service';
import { AccountService } from '../../core/services/account-service';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatBadge,
    MatButton,
    RouterLink,
    RouterLinkActive,
    MatProgressBar,
    MatMenu,
    MatMenuTrigger,
    MatDivider,
    MatMenuItem
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 busyService = inject(Busy)
 cartService = inject(CartService)
 accountService = inject(AccountService)
 router = inject(Router)

 logout() {
  this.accountService.logout().subscribe({
    next: () => {
      this.accountService.currentUser.set(null)
      this.router.navigateByUrl('/')
    }
  })
 }

}
