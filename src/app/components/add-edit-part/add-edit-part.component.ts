import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../services/inventory.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-part',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-part.component.html',
  styleUrls: ['./add-edit-part.component.scss'],
})
export class AddEditPartComponent {
  inventoryService = inject(InventoryService);
  part = { id: '', name: '', brand: '', quantity: 0, price: 0 };

  addPart() {
    this.part.id = crypto.randomUUID(); // Generate unique ID
    this.inventoryService.addPart({ ...this.part });
    this.part = { id: '', name: '', brand: '', quantity: 0, price: 0 }; // Reset form
  }
}
