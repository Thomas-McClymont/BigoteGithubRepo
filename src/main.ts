import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { InventoryListComponent } from './app/components/inventory-list/inventory-list.component';
import { routes } from '@app/routes/app.routes';

bootstrapApplication(InventoryListComponent, {
  providers: [provideRouter(routes)],
});
