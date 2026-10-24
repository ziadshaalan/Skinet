import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../shared/components/confirmation-dialog/confirmation-dialog';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(MatDialog);

  /**
   * Opens a confirmation dialog and returns a Promise.
   *
   * The Promise resolves to:
   * - true when the user confirms.
   * - false or undefined when the user cancels or closes the dialog.
   *
   * firstValueFrom() converts the afterClosed() Observable into a Promise,
   * allowing the calling component to use await.
   */
  confirm(
    title: string,
    message: string,
    buttonText: string
  ): Promise<boolean | undefined> {
    const dialogRef = this.dialog.open<
      ConfirmationDialog,
      { title: string; message: string; buttonText: string },
      boolean
    >(ConfirmationDialog, {
      width: '400px',
      data: { title, message, buttonText },
    });

    return firstValueFrom(dialogRef.afterClosed());
  }
}