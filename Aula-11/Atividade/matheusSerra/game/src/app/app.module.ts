import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DetalheGameComponent } from './detalhe-game/detalhe-game.component';

import { JogoService } from './jogo.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DetalheGameComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ JogoService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }