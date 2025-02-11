import { Routes } from '@angular/router';
import { InventoryListComponent } from '../components/inventory-list/inventory-list.component';
import { AddEditPartComponent } from '../components/add-edit-part/add-edit-part.component';

export const routes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'add', component: AddEditPartComponent },
];
