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
  	this.messageService.add('Professor Encontrados...');
  	return of(PROFESSORES);
  }

  getProfessor(id: number):  Observable<Professor> {
  	this.messageService.add(`Carregando professor id=${id}`);
  	return of(PROFESSORES.find(professor => professor.id === id));
  }
}
