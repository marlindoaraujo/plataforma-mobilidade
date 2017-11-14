import { Component } from '@angular/core';

@Component({
  selector: 'weverton',
  template: '<p>{{nome}} {{sobrenome}}</p>'
})
export class meuNome {
  nome = 'Weverton';
  sobrenome = 'Damascena';
}