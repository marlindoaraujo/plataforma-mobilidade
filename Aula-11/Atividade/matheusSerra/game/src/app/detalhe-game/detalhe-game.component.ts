import { Component, OnInit, Input } from '@angular/core';

import { Jogo } from '../game/jogo';
@Component({
  selector: 'app-detalhe-game',
  templateUrl: './detalhe-game.component.html',
  styleUrls: ['./detalhe-game.component.css']
})
export class DetalheGameComponent implements OnInit {
  @Input() jogo: Jogo;
  
  constructor() { }

  ngOnInit() {
  }

}
