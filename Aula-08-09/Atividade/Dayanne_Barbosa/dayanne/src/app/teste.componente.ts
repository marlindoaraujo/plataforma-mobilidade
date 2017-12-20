import {Component} from '@angular/core'



@Component({
	selector: 'dayanne',
	template: `<h2>{{titulo}}</h2>
	 <p>{{nome}} {{snome}}</p>`

})

export class Nome {
	titulo:string = 'Acadêmico:';
	nome:string   ='Cleudayanne';
	snome:string  ='Barbosa';



}
