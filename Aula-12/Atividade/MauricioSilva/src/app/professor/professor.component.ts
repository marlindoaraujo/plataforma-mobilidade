import { Component, OnInit } from '@angular/core';

import { Professor } from './professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores: Professor[];
  //alunoSelecionado: Aluno; 

  
  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.getProfessores();
  }
  
  //selecionaAluno(aluno: Aluno): void {
   // this.alunoSelecionado = aluno; 
  //}
  
  getProfessores() :void {
    this.professorService.getProfessores()
    .subscribe(professores => this.professores = professores);
  }
}