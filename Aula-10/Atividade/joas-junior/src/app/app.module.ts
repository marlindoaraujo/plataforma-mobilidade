import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Teste} from './teste.componente';

import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste,
    ProfessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
