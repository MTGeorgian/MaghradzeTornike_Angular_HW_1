import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtgOneComponent } from './mtg-one/mtg-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MtgOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MtgOneComponent]
})
export class AppModule { }
