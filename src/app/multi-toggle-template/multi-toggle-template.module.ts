import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiToggleTemplateComponent } from './multi-toggle-template/multi-toggle-template.component';

@NgModule({
  declarations: [MultiToggleTemplateComponent],
  exports: [MultiToggleTemplateComponent],
  imports: [CommonModule],
})
export class MultiToggleTemplateModule {}
