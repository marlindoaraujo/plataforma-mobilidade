import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Jogo } from '../game/jogo';
import { JogoService } from '../jogo.service';
@Component({
  selector: 'app-detalhe-game',
  templateUrl: './detalhe-game.component.html',
  styleUrls: ['./detalhe-game.component.css']
})
export class DetalheGameComponent implements OnInit {
  @Input() jogo: Jogo;
  
  constructor( 
  	private route: ActivatedRoute,
    private jogoService: JogoService,
    private location: Location) { }

  ngOnInit() {
  	this.getJogo();
  }

  getJogo(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
    this.jogoService.getJogo(id) 
      .subscribe(jogo => this.jogo = jogo);
  }

   goBack(): void {
    this.location.back();
  }
}
