import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joas';
  nome: string ='joas';
  sobrenome: string = 'ribeiro';
  nomecompleto(): string {
  	return this.nome +' '+ this.sobrenome;
  }
}
