import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovoComponent } from './novo-componente.component';
import { NomeDoComponenteComponent } from './nome-do-componente/nome-do-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponent,
    NomeDoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
