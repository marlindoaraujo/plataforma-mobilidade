import { Component, OnInit } from '@angular/core';

import { Prof } from './professor';
import { PROF } from './mock-prof';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

	 professores: Prof[] =  PROF;
     profSelecionado: Prof;

  constructor() { }

  ngOnInit() {
  }
   selecionaProf(professor: Prof): void {
    this.profSelecionado = professor;
}
}
