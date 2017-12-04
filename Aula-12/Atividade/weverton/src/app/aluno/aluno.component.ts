import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[];
  // alunoSelecionado: Aluno; remova esse atributo que não usamos mais

  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  // selecionaAluno(aluno: Aluno): void {
  //   this.alunoSelecionado = aluno; 
  // } // Remova essa esse método que não usamos mais
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }
}