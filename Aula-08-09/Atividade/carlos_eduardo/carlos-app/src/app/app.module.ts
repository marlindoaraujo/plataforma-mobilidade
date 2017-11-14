import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExibirNomeComponent } from './exibir-nome/exibir-nome.component';
import { CarlosComponent } from './carlos/carlos.component';


@NgModule({
  declarations: [
    AppComponent,
    ExibirNomeComponent,
    CarlosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
