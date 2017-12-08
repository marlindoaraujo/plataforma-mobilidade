import { Component, OnInit } from '@angular/core';

import { Professor } from '../professor/professor';
import { ProfessorService } from '../professor.service';

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
  	.subscribe(professores => this.professores = professores.slice(0,4));
  }
}
