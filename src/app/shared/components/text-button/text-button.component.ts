import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-button',
  imports: [CommonModule],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextButtonComponent {
  @Input() label: string = 'Default Button'; // Default value
}
