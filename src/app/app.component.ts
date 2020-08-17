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

  options = ['option1', 'option2', 'option3'];

  optionChanged(value: number): void {
    this.selectedValue = value;
  }
}
