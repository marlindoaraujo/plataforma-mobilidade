import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Importar Input de angular/core

import { Professor } from '../professor/professor'; 
import { ProfessorService } from '../professor.service'; //Importar o nosso Modelo de dados de Aluno
@Component({
  selector: 'app-detalhe-professor',
  templateUrl: './detalhe-professor.component.html',
  styleUrls: ['./detalhe-professor.component.css']
})
export class DetalheProfessorComponent implements OnInit {

  @Input() professor: Professor; //Adicina uma propriedade que pode ser recebida do tipo Aluno

  constructor( private route: ActivatedRoute,
    private professorService: ProfessorService,
    private location: Location) { }

  ngOnInit() {
  	 this.getProfessor();
  }
    getProfessor(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //Recebe o valor do Parâmetro da rota
    this.professorService.getProfessor(id) //calma que ainda vamos criar esse método no nosso service
      .subscribe(professor => this.professor = professor);
  }
   goBack(): void {
    this.location.back(); //função para voltar a URL anterior
  }
}