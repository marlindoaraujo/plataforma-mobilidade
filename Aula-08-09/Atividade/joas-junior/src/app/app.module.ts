import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Teste} from './teste.componente';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste,
    AlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
