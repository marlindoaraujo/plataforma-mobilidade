import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Professor } from './professor/professor';
import { PROFESSOR } from './professor/mock-professor';

import { MessageService } from './message.service';

@Injectable()
export class ProfessorService {

  constructor(private messageService: MessageService) { }
  
  getProfessores(): Observable<Professor[]> {
  	this.messageService.add('Professores Encontrados...'); //Adicione a ao service de mensagem
  	return of(PROFESSOR);
  }
   getProfessor(id: number):  Observable<Professor> {
    this.messageService.add(`Carregando professor id=${id}`);
    return of(PROFESSOR.find(professor => professor.id === id));
 }
}