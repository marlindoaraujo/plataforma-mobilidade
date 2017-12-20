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
  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if(!nome) {return ;} 
    this.alunoService.adicionarAluno({nome} as Aluno)
    .subscribe(aluno => {
      this.alunos.push(aluno);
    })
  }

  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(a => a !== aluno); // atualiza lista de alunos
    this.alunoService.deletarAluno(aluno).subscribe(); //chama o método deletarAluno de alunoService passando o aluno a ser deletado!
  }
}