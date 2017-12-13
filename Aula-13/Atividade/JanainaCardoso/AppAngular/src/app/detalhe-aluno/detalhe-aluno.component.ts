import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';

import { Aluno } from '../aluno/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
  	private route: ActivatedRoute,
  	private alunoService: AlunoService,
  	private location: Location) { } 

  ngOnInit() {
  	this.getAluno();
  }

  getAluno(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.alunoService.getAluno(id)
	    .subscribe(aluno => this.aluno = aluno);
  }

  goBack(): void {
  	this.location.back();
  }

  salvar(): void {
    this.alunoService.atualizarAluno(this.aluno)
    .subscribe(() => this.goBack());
  } // Método que passará o os dados do aluno a ser atualizado para o AlunoService

}