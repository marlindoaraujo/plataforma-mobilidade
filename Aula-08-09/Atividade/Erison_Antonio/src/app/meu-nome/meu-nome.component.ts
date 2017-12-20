import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Erison',
  templateUrl: './meu-nome.component.html',
  styleUrls: ['./meu-nome.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeuNomeComponent implements OnInit {

	nome ='Erison'

  constructor() { }

  ngOnInit() {
  }

}
