import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Usuario} from './teste.componente';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Usuario
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
