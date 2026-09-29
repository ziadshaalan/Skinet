import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//this service for showing an error message

@Injectable({
  providedIn: 'root',
})
export class Snackbar {
  private snackbar = inject(MatSnackBar)

  error(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snack-error']
    })
  }

  success(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snack-sucess']  //customization of default styling (material-theme.scss)
    })
  }

  /**
   * Lightweight, non-blocking confirmation toast.
   *
   * Deliberately different in shape from error()/success():
   *  - no action button, so there is nothing for the user to click or dismiss
   *  - short duration, so it fades away on its own
   *  - bottom-end, so it never covers the fixed header at the top of the screen
   *
   * `quantity` is optional: pass it when more than one unit was added so the user
   * sees "3 x Boots added..." rather than being told a single item was added.
   */
  addedToCart(productName: string, quantity = 1) {
    const label = quantity > 1 ? `${quantity} x ` : ''
    // undefined is passed for the action so Material renders no button at all
    this.snackbar.open(`${label}${productName} added to your cart`, undefined, {
      duration: 2500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['snack-notice']
    })
  }
}




/**
 * Snackbar Service
 *
 * Thin wrapper around Angular Material's MatSnackBar.
 * Provides consistent styling and duration for all app notifications.
 *
 * Usage:
 *   snackbar.error('Something went wrong')
 *   snackbar.success('Item added successfully')
 *   snackbar.addedToCart(product.name)      // auto-dismissing toast, no button
 *
 * Styling is defined in material-theme.scss via:
 *   .snack-error    → red/error styles
 *   .snack-success  → green/success styles
 *   .snack-notice   → calm confirmation toast for add-to-cart
 */
