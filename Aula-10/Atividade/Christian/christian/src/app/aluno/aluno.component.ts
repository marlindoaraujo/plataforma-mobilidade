import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos'; 

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] =  ALUNOS;
  alunoSelecionado: Aluno;
  constructor() { }

  ngOnInit() {
  }
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; 
  }
}