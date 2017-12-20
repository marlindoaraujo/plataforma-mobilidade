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
  alunoSelecionado: Aluno; //propriedade que irá receber o objeto do parâmetro de selecionarAluno
  constructor() { }

  ngOnInit() {
  }
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; // Um método sem retorno que recebe um aluno e atribue a propriedade alunoSelecionado
  }
}
