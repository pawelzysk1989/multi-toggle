import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MultiToggleOption } from '../../utils/multi-toggle-option';

@Component({
  selector: 'app-multi-toggle-option',
  templateUrl: './multi-toggle-option.component.html',
  styleUrls: ['./multi-toggle-option.component.scss'],
  providers: [
    {
      provide: MultiToggleOption,
      useExisting: MultiToggleOptionComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiToggleOptionComponent extends MultiToggleOption<number> {}
