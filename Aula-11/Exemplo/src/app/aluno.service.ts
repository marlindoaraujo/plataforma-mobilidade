import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos';

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  constructor(private messageService: MessageService) { }
  
  getAlunos(): Observable<Aluno[]> {
  	this.messageService.add('Alunos Encontrados...'); //Adicione a ao service de mensagem
  	return of(ALUNOS);
  }
}