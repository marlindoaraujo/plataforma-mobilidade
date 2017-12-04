import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  mensagens: string[] = []; //Criando uma propríedade para reseber um array de string como mensagens
  constructor() { }
  add(mensagem: string) { 
  	this.mensagens.push(mensagem);
  } //Método add que recebe uma string e adiciona ao final do array de mensagens

  clear() {
  	this.mensagens = [];
  } //Método que limpa todo o array de mensagens
}