import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop-service';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatAnchor } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// Overall flow:
// Shop opens the dialog and sends the current filters as data.
// FiltersDialog receives the data and lets the user modify the selections.
// When Apply is clicked, close() returns the selected filters and closes the dialog.
// afterClosed() in Shop receives that result, updates shopParams, and reloads the products.

@Component({
  selector: 'app-filters-dialog',
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatAnchor,
    FormsModule // Provides [(ngModel)], [value]
  ],
  templateUrl: './filters-dialog.html',
  styleUrl: './filters-dialog.css',
})
export class FiltersDialog {
  protected shopService = inject(ShopService)
  private dialogRef = inject(MatDialogRef<FiltersDialog>)
  // receives the object passed in data:{} when shop opened this dialog
  data = inject(MAT_DIALOG_DATA)

  // Store the dialog's current selections until the user clicks Apply.
  selectedBrands: string[] = this.data.selectedBrands
  selectedTypes: string[] = this.data.selectedTypes




  applyFilters() {
    // Close the dialog and send the selected filters back to Shop via afterClosed().
    // Closing the dialog destroys its view/component instance and its local state.
    this.dialogRef.close({
      brandsSelected: this.selectedBrands,  // 'brandsSelected' key must match result.selectedBrands in shop
      typesSelected: this.selectedTypes

    })
  }

}
