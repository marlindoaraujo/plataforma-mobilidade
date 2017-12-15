import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor/professor'; //importe nosso modelo de dados de Aluno
import { ProfessorService } from '../professor.service'; //Importe nosso service de Aluno

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	 professores: Professor[] = [];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {

  	this.getProfessores();
  }

  getProfessores(): void {
    this.professorService.getProfessores()
    .subscribe(professores => this.professores = professores.slice(0,4)); // Carregue os 4 primeiro alunos da lista
  }

}
