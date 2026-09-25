import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../shared/components/confirmation-dialog/confirmation-dialog';
import { firstValueFrom } from 'rxjs';

// Confirmation dialog flow:
// AdminComponent calls dialogService.confirm() and waits for the result.
// DialogService opens ConfirmationDialog and passes the title/message through MAT_DIALOG_DATA.
// ConfirmationDialog displays the data and closes with true on Confirm or no value on Cancel.
// afterClosed() emits that result as an Observable, and firstValueFrom() converts it to a Promise
// so AdminComponent can await it and decide whether to continue with the refund.

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(MatDialog)
  
  confirm(title: string, message: string, buttonText: string) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '400px',
      data: {title, message, buttonText}
    })

    return firstValueFrom(dialogRef.afterClosed())
  }
}
