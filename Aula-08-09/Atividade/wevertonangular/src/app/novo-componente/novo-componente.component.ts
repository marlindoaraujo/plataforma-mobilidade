import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NovoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
