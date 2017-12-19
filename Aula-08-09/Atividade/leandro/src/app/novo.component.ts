import { Component } from '@angular/core';

@Component({
  selector: 'leandro',
  template: '<p>{{nome}} {{sobrenome}}</p>'
})
export class meuNome {
  nome = 'Leandro';
  sobrenome = 'Lima';
}
