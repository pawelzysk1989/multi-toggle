import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiToggleModule } from './multi-toggle/multi-toggle.module';
import { MultiToggleTemplateModule } from './multi-toggle-template/multi-toggle-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiToggleModule,
    MultiToggleTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
