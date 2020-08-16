import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'multi-toggle';

  selectedValue: number | undefined = 1;

  optionChanged(value: number): void {
    this.selectedValue = value;
  }
}
