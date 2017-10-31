import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovoComponent } from './novo/novo.component';
import { TesteComponent } from './teste/teste.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NovoComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
