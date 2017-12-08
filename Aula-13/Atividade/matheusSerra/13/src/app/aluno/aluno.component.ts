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

  adicionar(nome: string): void {
    nome = nome.trim(); //limpa os espaços em excesso do nome;
    if(!nome) {return ;} //caso o nome não tenha sido informado não faz nada!
    this.alunoService.adicionarAluno({nome} as Aluno) //Chama a o método AlunoService.adicionarAluno passando o novo nome sumulando uma instância de Aluno
    .subscribe(aluno => {
      this.alunos.push(aluno);//Atualiza a lista de Aluno
    })
  }

  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(a => a !== aluno); // atualiza lista de alunos
    this.alunoService.deletarAluno(aluno).subscribe(); //chama o método deletarAluno de alunoService passando o aluno a ser deletado!
  }
}