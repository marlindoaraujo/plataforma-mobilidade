import { Component, OnInit } from '@angular/core';
import {Professor} from './prof';
import {Professores} from './mock';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  Professores: Professor[]= Professores;
  profselecionado : Professor;
  constructor() { }

  ngOnInit() {
  }
  selectionar(prof : Professor){
    this.profselecionado = prof;
  }
}
