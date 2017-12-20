import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfessorComponent } from './professores/professores.component';
import { AlunoComponent } from './aluno/aluno.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

