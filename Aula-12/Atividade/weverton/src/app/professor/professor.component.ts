import { Component, OnInit } from '@angular/core';

import { Professor } from './professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores: Professor[];


  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.getProfessores();
  }



  getProfessores() :void {
    this.professorService.getProfessores()
    .subscribe(professores => this.professores = professores);
  }
}
