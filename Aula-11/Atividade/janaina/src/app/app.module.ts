  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';


  import { AppComponent } from './app.component';
  import { ProfessorComponent } from './professor/professor.component';
  import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';

  import { ProfessorService } from './professor.service'; //Importa nosso Service de alunos
  import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component'; //Importa nosso Service de mensagens




  @NgModule({
    declarations: [
      AppComponent,
      ProfessorComponent,
      DetalheProfessorComponent,
      MessagesComponent

    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [ ProfessorService, MessageService ], //Adiciona nossas Serviços ao providers do nosso módulo princial
    bootstrap: [AppComponent]
  })
  export class AppModule { }
