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
 *
 * Styling is defined in material-theme.scss via:
 *   .snack-error   → red/error styles
 *   .snack-success → green/success styles
 */