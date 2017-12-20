import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNome } from './novo-componente.component';
import { TesteHomeComponent } from './teste-home/teste-home.component'; // Importa A classe do Componente

@NgModule({
  declarations: [
    AppComponent,
    MyNome,
    TesteHomeComponent //Adiciona nas declarações do módulo.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
