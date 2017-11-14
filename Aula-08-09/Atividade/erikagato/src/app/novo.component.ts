import { Component } from '@angular/core';

@Component({
  selector: 'erika',
  template: '<h1>{{nome}} {{sobrenome}}</h1>'
})
export class myName {
  nome = 'Erika';
  sobrenome = 'Gato';
}