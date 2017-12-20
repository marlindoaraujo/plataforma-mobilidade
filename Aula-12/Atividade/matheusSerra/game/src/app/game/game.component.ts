import { Component, OnInit } from '@angular/core';
import { Jogo } from './jogo'; 
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  jogos: Jogo [];
  
  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
  }
  

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos); 
  }

}
