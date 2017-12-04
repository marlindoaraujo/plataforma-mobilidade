import { Component, OnInit, Input } from '@angular/core'; // Importar Input de angular/core

import { Aluno } from '../aluno/aluno'; //Importar o nosso Modelo de dados de Aluno
@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno; //Adicina uma propriedade que pode ser recebida do tipo Aluno

  constructor() { }

  ngOnInit() {
  }
}