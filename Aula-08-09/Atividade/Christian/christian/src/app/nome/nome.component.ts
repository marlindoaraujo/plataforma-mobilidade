import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'christian',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {
	nome = 'Christian Ferreira Barbosa'
  constructor() { }

  ngOnInit() {
  }

}
