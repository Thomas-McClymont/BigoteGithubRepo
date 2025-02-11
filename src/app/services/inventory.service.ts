import { Injectable, signal } from '@angular/core';
import { CarPart } from '../models/car-part';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private parts = signal<CarPart[]>([]);

  getParts() {
    return this.parts;
  }

  addPart(part: CarPart) {
    this.parts.update((list) => [...list, part]);
  }

  removePart(id: string) {
    this.parts.update((list) => list.filter((p) => p.id !== id));
  }
}
