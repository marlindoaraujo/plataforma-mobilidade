import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    DetalhesAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
