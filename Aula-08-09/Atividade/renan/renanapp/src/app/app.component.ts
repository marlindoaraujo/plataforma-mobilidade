import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usuario';
  nome1: string ='renan';
  nome2: string = 'Almeida';

  funcaoNome(): string {
  	return this.nome1 +' '+ this.nome2;
  }
}
