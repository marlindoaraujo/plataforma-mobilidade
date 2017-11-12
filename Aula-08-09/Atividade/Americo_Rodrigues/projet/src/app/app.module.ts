import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Nome} from './teste.componente';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Nome
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
