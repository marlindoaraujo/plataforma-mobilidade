import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { MensagensComponent } from './mensagens/mensagens.component';

import { ProfessorService } from './professor.service';
import { MensagensService } from './mensagens.service';
import { DetalheProfComponent } from './detalhe-prof/detalhe-prof.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    DetalheProfComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProfessorService,MensagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
