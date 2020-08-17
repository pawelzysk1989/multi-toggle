import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-multi-toggle-template',
  templateUrl: './multi-toggle-template.component.html',
  styleUrls: ['./multi-toggle-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiToggleTemplateComponent<T> {
  picked: T | undefined;

  @Input()
  options: T[] = [];

  @Output()
  selectionChanged = new EventEmitter<T>();

  @ContentChild('option', { static: false })
  optionTemplateRef: TemplateRef<any> | null = null;

  @Input()
  comparator: (t1: T, t2: T | undefined) => boolean = (t1, t2) => t1 === t2;

  selectOption(option: T): void {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}
