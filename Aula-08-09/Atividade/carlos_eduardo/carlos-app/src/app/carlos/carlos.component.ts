import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carlos',
  templateUrl: './carlos.component.html',
  styleUrls: ['./carlos.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class CarlosComponent implements OnInit {
  nome = 'Carlos Eduardo Goncalves Pacheco';
  
  constructor() { 
 

    
  }

  ngOnInit() {
  }

}
