import { Component, inject, input } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Busy } from '../../core/services/busy';
import { CartService } from '../../core/services/cart-service';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatBadge,
    MatButton,
    RouterLink,
    RouterLinkActive,
    MatProgressBar
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 busyService = inject(Busy)
 cartService = inject(CartService)

}
