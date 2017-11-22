import { Component, OnInit } from '@angular/core';

import { Professor } from './professores';
import { PROFESSORES } from './mock-professores';

@Component({
  selector: 'app-professor',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessorComponent implements OnInit {

   professores: Professor[] =  PROFESSORES;
     professoresSelecionado: Professor;

  constructor() { }

  ngOnInit() {
  }
   selecionaProfessores(professor: Professor): void {
    this.professoresSelecionado = professor;
}

}
