 import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  import { AlunoService } from './aluno.service'; //Importa nosso Service de alunos
  import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; //Importa nosso Service de mensagens

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent,
      MessagesComponent,
      DashboardComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
    providers: [ AlunoService, MessageService ], //Adiciona nossas Serviços ao providers do nosso módulo principal
    bootstrap: [AppComponent]
  })
  export class AppModule { }