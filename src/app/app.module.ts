import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PartemeioComponent } from './partemeio/partemeio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PartemeioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
