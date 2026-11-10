import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-quantity',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './update-quantity.html',
  styleUrl: './update-quantity.css'
})
export class UpdateQuantity {
  data = inject(MAT_DIALOG_DATA);                       // { quantity, name } sent by the catalog
  private dialogRef = inject(MatDialogRef<UpdateQuantity>);
  updatedQuantity: number | null = this.data.quantity;  // starts with the current stock

  // Button is enabled only for a real number >= 0 that is different from the current stock
  get canUpdate(): boolean {
    return this.updatedQuantity !== null
      && this.updatedQuantity >= 0
      && this.updatedQuantity !== this.data.quantity;
  }

  updateQuantity() {
    if (this.canUpdate) {
      this.dialogRef.close({ updatedQuantity: this.updatedQuantity });
    }
  }
}