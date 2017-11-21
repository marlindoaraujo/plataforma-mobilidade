  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms'; // O NgModel está nessa aqui \o/


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent
    ],
    imports: [
      BrowserModule,
      FormsModule //Importar o FormsModule no array de imports do módulo
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
