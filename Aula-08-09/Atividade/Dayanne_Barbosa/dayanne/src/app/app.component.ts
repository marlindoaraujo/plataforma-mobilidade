import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cleudayanne';
  nome: string ='Cleudayanne';
  snome: string = 'Barbosa';
  nomecompleto(): string {
  	return this.nome +' '+ this.snome;
  }
}
