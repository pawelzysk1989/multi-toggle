import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiToggleModule } from './multi-toggle/multi-toggle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
