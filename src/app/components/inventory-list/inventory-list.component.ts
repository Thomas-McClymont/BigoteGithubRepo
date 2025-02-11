import { Component, inject } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent {
  inventoryService = inject(InventoryService);
  parts = this.inventoryService.getParts();

  remove(id: string) {
    this.inventoryService.removePart(id);
  }
}
