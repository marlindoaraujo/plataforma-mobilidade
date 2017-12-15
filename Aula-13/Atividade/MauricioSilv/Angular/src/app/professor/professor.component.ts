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
   adicionar(nome: string): void {
    nome = nome.trim(); //limpa os espaços em excesso do nome;
    if(!nome) {return ;} //caso o nome não tenha sido informado não faz nada!
    this.professorService.adicionarAluno({nome} as Professor) //Chama a o método AlunoService.adicionarAluno passando o novo nome sumulando uma instância de Aluno
    .subscribe(aluno => {
      this.professores.push(aluno);//Atualiza a lista de Aluno
    })

  }
   delete(aluno: Professor): void {
    this.professores = this.professores.filter(a => a !== aluno); // atualiza lista de alunos
    this.professorService.deletarAluno(aluno).subscribe(); //chama o método deletarAluno de alunoService passando o aluno a ser deletado!
  }//Método que chama o service de aluno para salvar o novo
}