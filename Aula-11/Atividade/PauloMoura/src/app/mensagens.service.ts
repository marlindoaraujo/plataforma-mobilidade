import { Injectable } from '@angular/core';

@Injectable()
export class MensagensService {

  mensagens: string[]=[];
  constructor() {}


add(mensagens:string){
  this.mensagens.push(mensagens);
}
clear(){
  this.mensagens= [];
}
}
