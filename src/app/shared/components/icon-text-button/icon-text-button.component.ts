import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-text-button',
  templateUrl: './icon-text-button.component.html',
  styleUrls: ['./icon-text-button.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class IconTextButtonComponent {
  @Input() icon: string = 'home'; // Default icon
  @Input() text: string = 'Button'; // Default text
  @Input() color: 'primary' | 'accent' | 'warn' | '' = 'primary'; // Angular Material colors
  @Input() disabled: boolean = false;
}
