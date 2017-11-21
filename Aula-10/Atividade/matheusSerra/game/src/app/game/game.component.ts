import { Component, OnInit } from '@angular/core';
import { Jogo } from './jogo'; 
import { JOGOS } from './mock-jogos';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  jogos: Jogo [] = JOGOS;
  jogoSeleciona: Jogo;
  constructor() { }

  ngOnInit() {
  }
  selecionaJogo(jogo: Jogo): void{
  	this.jogoSeleciona = jogo;
  }

}
