import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service'; //Impote o MessageService
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } /* Injete 
  no Contrutor uma propriedade publica na nossa classe chamada 
  messageService já carregando uma  instancia de MessageService */

  ngOnInit() {
  }

}
