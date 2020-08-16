import { HostBinding, Directive, HostListener, Input } from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class MultiToggleOption<T> {
  private isDisabled = false;

  @Input()
  onClickCallback!: (value: T) => void;

  @Input()
  value!: T;

  @Input()
  selectedValue: T | undefined;

  @HostBinding('class.is_selected')
  get selected(): boolean {
    return this.selectedValue === this.value;
  }

  @HostBinding('class.disabled')
  @Input()
  get disabled(): boolean {
    return this.isDisabled;
  }
  set disabled(disabled: boolean) {
    this.isDisabled = disabled;
  }

  @HostListener('click', ['$event.target'])
  onClick(): void {
    if (!this.disabled) {
      this.onClickCallback(this.value);
    }
  }
}
