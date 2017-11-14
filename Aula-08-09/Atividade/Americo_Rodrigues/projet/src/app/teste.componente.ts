import {Component} from '@angular/core'



@Component({
	selector: 'americo',
	template: `<h2>{{titulo}} {{nome}} {{snome}}</h2>`

})

export class Nome {
	titulo = 'Acadêmico:';
	nome='Americo';
	snome='Rodrigues';



}
