import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Americo';
  nome: string ='Americo';
  snome: string = 'Rodrigues';
  nomecompleto(): string {
  	return this.nome +' '+ this.snome;
  }
}
