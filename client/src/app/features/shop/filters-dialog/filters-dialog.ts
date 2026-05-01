import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop-service';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatAnchor } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

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
  // access cached brands/types arrays for populating the UI lists
  protected shopService = inject(ShopService)
  private dialogRef = inject(MatDialogRef<FiltersDialog>)
    // receives the object passed in data:{} when shop opened this dialog
  data = inject(MAT_DIALOG_DATA)

 // local working copies — initialized from shop's current selections
  // user's changes stay here until Apply is clicked
  selectedBrands: string[] = this.data.selectedBrands
  selectedTypes: string[] = this.data.selectedTypes



  
  applyFilters() {
     // package local variables into an object and send back to shop via afterClosed()
    // then destroy this component and all its variables
    this.dialogRef.close({
      selectedBrands: this.selectedBrands,  // 'selectedBrands' key must match result.selectedBrands in shop
      selectedTypes: this.selectedTypes

    })
  }

}
