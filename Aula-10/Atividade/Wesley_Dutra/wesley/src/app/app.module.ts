import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessoresComponent } from './professores/professores.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    ProfessoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
