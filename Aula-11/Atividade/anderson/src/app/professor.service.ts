import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Professor } from './professor/professor';
import { PROFESSORES } from './professor/mock-professores';

import { MessageService } from './message.service';

@Injectable()
export class ProfessorService {

  constructor(private messageService: MessageService) { }
  
  getProfessores(): Observable<Professor[]> {
  	this.messageService.add('Professores Encontrados...'); //Adicione a ao service de mensagem
  	return of(PROFESSORES);
  }
}