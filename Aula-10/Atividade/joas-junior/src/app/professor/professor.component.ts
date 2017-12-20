import { Component, OnInit } from '@angular/core';

import{ Professor } from './professor';

import { PROFESSORES } from './mock-professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

	professores: Professor[] = PROFESSORES;

	professorSelecionado: Professor;

	selecionarProfessor(professor:Professor) : void{
		this.professorSelecionado = professor;
	}



  constructor() { }

  ngOnInit() {
  }

}

