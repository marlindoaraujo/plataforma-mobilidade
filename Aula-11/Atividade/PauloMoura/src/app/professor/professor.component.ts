import { Component, OnInit } from '@angular/core';
import {Professor} from './prof';
import { ProfessorService } from '../professor.service';
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  Professores: Professor[];
  profselecionado : Professor;
  constructor(private ProfessorService: ProfessorService){

  }

  ngOnInit() {
    this.getProfessores();
  }
  selecionar(prof :Professor){
    this.profselecionado = prof;
  }
  getProfessores() :void{
   this.ProfessorService.getProfessores().subscribe(Professores=> this.Professores= Professores);

  }
}
