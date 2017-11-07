import { Component } from '@angular/core';
@Component({
	selector: 'novo-componente',
	template: `
		<div>
			<h1>Olá sou {{ nomeCompleto() }} !</h1>  
			<img [src]="avatar" />  <!--  usando Property Binding para a propriedade src  -->
		</div>
	`
})
export class NovoComponent {
	nome: string= 'Vitor Hugo';
	sobreNome: string = 'Silva';
	avatar = 'assets/image/avatar.png';
	nomeCompleto() :string {
		return this.nome + ' ' + this.sobreNome;
	}
}