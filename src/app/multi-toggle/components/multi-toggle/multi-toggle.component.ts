import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MultiToggle } from '../../utils/multi-toggle';

@Component({
  selector: 'app-multi-toggle',
  templateUrl: './multi-toggle.component.html',
  styleUrls: ['./multi-toggle.component.scss'],
  providers: [
    {
      provide: MultiToggle,
      useExisting: MultiToggleComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiToggleComponent extends MultiToggle<number> {}
