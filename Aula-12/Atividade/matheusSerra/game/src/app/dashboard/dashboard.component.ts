import { Component, OnInit } from '@angular/core';

import { Jogo } from '../game/jogo';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
  	this.getJogos();
  }

  getJogos(): void{
  	this.jogoService.getJogos()
  	.subscribe(jogos => this.jogos = jogos.slice(0,4));
  }

}
