import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Professor} from './professor/prof';
import {Professores} from './professor/mock';

import {MensagensService} from './mensagens.service';
@Injectable()
export class ProfessorService {

  constructor(private MensagensService:MensagensService) {}

  getProfessores(): Observable<Professor[]>{
    this.MensagensService.add('Professoresdddd');
    return of(Professores);
  }
}
