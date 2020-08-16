import {
  ContentChildren,
  QueryList,
  Directive,
  AfterContentInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { MultiToggleOption } from './multi-toggle-option';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class MultiToggle<T> implements AfterContentInit {
  private selectedValue: T | undefined;
  @Input()
  set selected(selected: T | undefined) {
    this.selectedValue = selected;
    this.updateOptionsSelectedValue(selected);
  }
  get selected(): T | undefined {
    return this.selectedValue;
  }
  @Output() optionChanged = new EventEmitter<T>();

  @ContentChildren(MultiToggleOption)
  options: QueryList<MultiToggleOption<T>> = new QueryList();

  ngAfterContentInit(): void {
    this.setMultiToggleOptionsInput(
      (option) => (option.onClickCallback = this.select.bind(this))
    );
    this.updateOptionsSelectedValue(this.selectedValue);
  }

  private updateOptionsSelectedValue(selectedValue: T | undefined): void {
    this.setMultiToggleOptionsInput(
      (option) => (option.selectedValue = selectedValue)
    );
  }

  private setMultiToggleOptionsInput(
    setProperty: (option: MultiToggleOption<T>) => void
  ): void {
    this.options.forEach(setProperty);
  }

  private select(value: T): void {
    this.optionChanged.emit(value);
  }
}
