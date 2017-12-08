import { Component, OnInit, Input } from '@angular/core'; // Importar Input de angular/core

import { Professor } from '../professor/professor'; //Importar o nosso Modelo de dados de Aluno
@Component({
  selector: 'app-detalhe-professor',
  templateUrl: './detalhe-professor.component.html',
  styleUrls: ['./detalhe-professor.component.css']
})
export class DetalheProfessorComponent implements OnInit {

  @Input() professor: Professor; //Adicina uma propriedade que pode ser recebida do tipo Aluno

  constructor() { }

  ngOnInit() {
  }
}