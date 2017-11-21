import { Component } from '@angular/core';

@Component({
  selector: 'nome',
  template: '<h3>{{nome}}</h3>'
})
export class Nome {
  nome = 'Maurício da Silva Pereira';
}