import {Component} from '@angular/core'



@Component({
	selector: 'renan',
	template: `<table>
					<tr>
						<td>Usuario</td>
						<td>Idade</td>
						<td>Semestre</td>
					</tr>
					<tr>
						<td>{{usuario}}</td>
						<td>{{nome}}</td>
						<td>{{semestre}}</td>
					</tr>
				</table>`

})

export class Usuario {
	usuario = 'Acadêmico:';
	nome='Renan';
	semestre='4 Semestre';



}
