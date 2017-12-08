import { Component, OnInit } from '@angular/core';

import { Professor } from '../professor/professor'; //importe nosso modelo de dados de Aluno
import { ProfessorService } from '../professor.service'; //Importe nosso service de Aluno

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  professores: Professor[] = []; //crie uma propriedade chamada alunos do tipo array de Aluno com valor de uma rray vazio

  constructor(private professorService: ProfessorService) { }/*Injete a uma propriedade
  privada na nossa classe chamada alunoService do tipo AlunoService*/

  ngOnInit() {
  	this.getProfessores(); //Executa o método assim que instância de DashboardComponent for carregada
  }

  getProfessores(): void {
  	this.professorService.getProfessores()
  	.subscribe(professores => this.professores = professores.slice(0,4)); // Carregue os 4 primeiro alunos da lista
  }
}