import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/observable/of';

import { Jogo } from './game/jogo';
import { JOGOS } from './game/mock-jogos';

import { MessageService } from './message.service';
@Injectable()
export class JogoService {

  constructor(private messageService: MessageService) { }

  getJogos(): Observable<Jogo[]> {
  	this.messageService.add('Jogos Encontrados...');
  	return of(JOGOS);
  }

}
