import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiToggleComponent } from './components/multi-toggle/multi-toggle.component';
import { MultiToggleOptionComponent } from './components/multi-toggle-option/multi-toggle-option.component';

@NgModule({
  declarations: [MultiToggleComponent, MultiToggleOptionComponent],
  exports: [MultiToggleComponent, MultiToggleOptionComponent],
  imports: [CommonModule],
})
export class MultiToggleModule {}
