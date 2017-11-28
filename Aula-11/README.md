# Plataforma de Mobilidade Corporativa - (Aula 11)

## NgModel, Criando componentes para detalhes e trabalhando com Services (Ná prática)



#### - 01 - Editando a Aplicação feita na aula 10

Vamos motificar o exemplo feito no tutorial da aula 10, para isso abra-o exemplo que você criou através do tutorial.

Tá para você que não fez mas queria muito mais muito fazer esses passos você pode clonar o exemplo diretamente do seguinte repositório: https://github.com/VitorHugoSilva/ExemploAula10Angular.

Obs: Não esquece de rodar o ```npm install``` para instalar os pacotes que são usados nesse projeto.

**Serio que você vai clonar??? :neutral_face: Vai lá tenta fazer os passos da aula 10, garanto que você vai aproveitar melhor esses aqui :wink:**

#### 00 - Abra o servidor para rodar a aplicação.

Use o comando:

```sh
ng serve -o
```


#### 01 - Trabalhando com ngModel

O `[(ngModel)]` é uma instância `FormControl`  que vincula um valor e manterá a exibição sincronizada com o modelo.

Abra o arquivo `/src/app/aluno/aluno.component.html` e mofifique:

```html
<div *ngIf="alunoSelecionado">
  <h2>{{ alunoSelecionado.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ alunoSelecionado.id }}</div>
  <div>
    <span>nome: </span>
       <input [(ngModel)]="alunoSelecionado.nome" placeholder="nome"> <!-- Vincula o valor desse Elemento a todos objetos dessa instancias selecionada -->
  </div>
</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)" [class.selecionado]="aluno === alunoSelecionado">
    <span> {{ aluno.id }} </span> {{ aluno.nome }}
  </li>
</ul>


```
Provavelmente isso vai dar :shit: na sua aplicação mas não se preocupe vamos consertar isso.

#### 02 - Adicionando FormsModule em AppModule

Para o `ngModel` funcionar devemos adiconar a classe `FormsModule` nos `imports` do arquivo `src/app/app.module.ts`, mofique esse arquivo como no exemplo abaixo:

```ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // O NgModel está nessa aqui \o/


import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    DetalheAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Importar o FormsModule no array de imports do módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###### Pronto testa ai...:v:

#### 03 - Criando um novo componente

Vamos agora criar um componente para mostar os detalhes dos alunos quando eles forem selecionados, para isso vamos rodar o comando do AngularCLI que gera um novo componente, e vamos chama-lo `detelhe-aluno`:

```sh
  ng g c detalhe-aluno
```
#### 04 - Editando o tamplate DetalheAlunoComponent

Abra o arquivo `detalhe-aluno.component.html`, em `src/app/detalhe-aluno/detalhe-aluno.component.html` e adcione o seguinte template:
```html
<div *ngIf="aluno">
  <h2>{{ aluno.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ aluno.id }}</div>
  <div>
  <span>nome: </span>
       <input [(ngModel)]="aluno.nome" placeholder="nome">
  </div>
</div>
```
Basicamente a parte de detalhes de dentro do arquivo `aluno.component.html`


#### 05 - Adicionando a propriedade @Input() em DetalheAlunoComponent

Vamos fazer agora  a seguinte funcionalidade, imagine que ao usar o `<app-detalhe-aluno></app-detalhe-aluno>` tenha a possibilidade de passar paraparâmetros para serem usado dentro do componente, para isso temos que criar uma propriedade com o *Decoration* `@Input()`, então vamos lá:

##### 05.1 - Adicionando app-detalhe-aluno em aluno.component.html

Abra o arquivo ` aluno.component.html` em `src/app/detalhe-aluno/detalhe-aluno.component.html` e faça a seguinte modificação:

```html
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)" [class.selecionado]="aluno === alunoSelecionado">
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
<hr>
<app-detalhe-aluno [aluno]="alunoSelecionado"></app-detalhe-aluno><!-- Adicionado o seletor e a propriedade aluno com o valor do aluno selecionado -->
```
Provavelmente isso vai dar :shit: na sua aplicação mas não se preocupe vamos consertar isso.

##### 05.2 - @Input() em DetalheAlunoComponent

Abra o `detalhe-aluno.component.ts` em `src/app/detalhe-aluno/detalhe-aluno.component.ts` e mofique-o como o exemplo abaixo:

```ts
import { Component, OnInit, Input } from '@angular/core'; // Importar Input de angular/core

import { Aluno } from '../aluno/aluno'; //Importar o nosso Modelo de dados de Aluno
@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno; //Adicina uma propriedade que pode ser recebida do tipo Aluno

  constructor() { }

  ngOnInit() {
  }
}
```
Pega P@#$%!! :raised_hands:, funcionou, ao menos deveria tá funcionando agora, se não verifique novamente os passos, mas vamos enteder como tá funcionando essa parada :sunglasses: :  Ao criar a propriedade `aluno` e colocar o `@Input` como uma "Anotação" da propriedade isso fará com que o valor dessa propriedade possa ser recebido como parâmentro como como do exemplo: `<app-detalhe-aluno [aluno]="alunoSelecionado"></app-detalhe-aluno>`. Assim como  para dentro dessa propriedade será passado o aluno selecionado no `AlunoComponent`.

Para saber mais: https://angular.io/api/core/Input


#### 06 - Entendendo um pouco sobre Services (Não pule é importante!!! :angry: )

Atualmente estamos mostrando dados do nosso **mock** de alunos, esses dados não são reais então vamos preparar nossa aplicação para receber dados de uma API, como issa a primeira coisa se pensar é que os componentes não devem buscar ou salvar dados diretamente e eles certamente não devem apresentar dados falsos conscientemente. Eles devem se concentrar na apresentação de dados e delegar o acesso a dados em um serviço.

Vamos um `AlunoService` que todas as classes de aplicativos podem usar para obter `alunos`. Vamos usar da injeção de dependência do angular para injetá-lo no construtor `AlunoComponent`

Os serviços são uma ótima maneira de compartilhar informações entre classes que não se conhecem.

Vamos também criar um `MessageService` e injetá-lo em dois lugares: 

- `AlunoService` que usa o serviço para enviar uma mensagem.
- Em `MessagesComponent` que exibe essa mensagem.


#### 07 - Criando AlunoService

Para criar de forma mais simples nosso `AlunoService` vamos usar o AngularCLI, rode o comando:

```sh
ng generate service aluno
```
ou 
```sh
ng g s aluno
```

Isso irá cria dos arquivos
- `src/app/aluno.service.spec.ts` - para teste
-  `src/app/aluno.service.ts` - Nosso esqueleto de Service

### Aviso para quem tá só copiando sem ler: NÃO É PARA COPIAR ESSA PARTE!!!!! :raised_hand:)
Conteúdo do arquivo `aluno.service.ts`
```ts
import { Injectable } from '@angular/core';

@Injectable() // Decorator para que o angular saiba que essa classe possa ser injetada
export class AlunoService {

  constructor() { }

}
```

#### 08 - Modificando AlunoService

Vamos adicionar um método para listar os alunos para o nosso Serviço disponibilizar para a nossa aplicação. para isso vamos fazer as seguintes modificações no nosso arquivo `src/app/aluno.service.ts`:

```ts
import { Injectable } from '@angular/core';

import { Aluno } from './aluno/aluno'; //Importa Nosso modelo de Dados para Aluno
import { ALUNOS } from './aluno/mock-alunos'; // Importa nossa lista de alunos

@Injectable()
export class AlunoService {

  constructor() { }
  
  getAlunos(): Aluno[] {
    return ALUNOS;
  } //Método getAluno que retornará nossa lista de alunos
}
```
#### 09 - Criando MessageService

Vamos criar nosso service de mensagem entre os componentes, para isso use o comando no Angular CLI:
```sh
ng generate service message
```
ou
```sh
ng g s message
```
Isso irá cria dos arquivos:

- `src/app/message.service.spec.ts`- para teste
- `src/app/message.service.ts` -  Nosso esqueleto de Service

#### 10 - Adicionando nossos Services ao AppModule

Abra o arquivo `src/app/app.module.ts` e vamos adicionar nossos services `AlunoService` e `MessageService` nos `providers` "Provedores" do nosso módulo principal assim esses serviços ficarão visiveis em todas os componentes que fazem parte desse módulo:

```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  import { AlunoService } from './aluno.service'; //Importa nosso Service de alunos
  import { MessageService } from './message.service'; //Importa nosso Service de mensagens

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [ AlunoService, MessageService ], //Adiciona nossas Serviços ao providers do nosso módulo principal
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

#### 11 - Atualizando nosso AlunoComponent

Abra o arquivo `src/app/aluno/aluno.component.ts`, e faça as seguintes modificações:

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
//import { ALUNOS } from './mock-alunos';  // Remova a importação do nosso mock de aluno pos agora ele será recebido via service
import { AlunoService } from '../aluno.service'; // Adcione a importação do nosso AlunoService

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[]; // Deixe a propriedade alunos vazia
  alunoSelecionado: Aluno; 
  constructor() { }

  ngOnInit() {
  }
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; }
}
```
#### 12 - Injetando Nosso AlunoService

Ainda no arquivo `src/app/aluno/aluno.component.ts`, vamos agora fazer a magia acontecer, Usaremos a injeção de dependencia para carregar nosso `AlunoService` em `AlunoComponent`:
```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[];
  alunoSelecionado: Aluno; 

  
  constructor(private alunoService: AlunoService) { }   /* Injetamos 
  agora no nosso Contrutor uma propriedade privada na nossa classe
  chamada alunoService já carregando uma  instancia de AlunoService */
  
  ngOnInit() {
  }
  
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; 
  }
}
```

Para saber mais sobre Dependency Injection acesse: https://angular.io/guide/dependency-injection.
ou http://blog.caelum.com.br/ioc-e-di-para-frameworks-mvc/ :point_left: Artigo em português.

#### 13 - Criando o getAlunos em AlunoComponent

Ainda no arquivo `src/app/aluno/aluno.component.ts`, vamos adcionar um método que carregará a lista de Alunos do nosso `AlunoService`:

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[];
  alunoSelecionado: Aluno; 

  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }
  
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; 
  }
  
  getAlunos() :void {
    this.alunos = this.alunoService.getAlunos();
  } // Método que irá colocar o valor do atributo alunos de acordo com o que o getAlunos de AlunoSevice irá retornar
}
```

**obs**.: Se acontecer algum erro, tente reiniciar o server as vezes esses tipo de modificação buga a aplicação, mas é só reinstartar o servidor, porém se você reiniciar e continuar dando erro, reveja os passos anteriores, ou me mande uma mensagem para esclarecer dúvidas ou pesquise nunca desista.:wink:

#### 14 - Chamando o ngOnInit

Embora você possa chamar `getAluno()` no construtor, essa não é a melhor prática. Reserve o construtor para inicialização simples, como parâmetros de construtor de criação de propriedades. 

O construtor não deve fazer nada. Certamente, não deve chamar uma função que faça solicitações HTTP para um servidor remoto como seria um serviço de dados real.

Em vez disso, vamos chamar o `getAluno()` dentro do `ngOnInit()` e deixe Angular chamar-lo no momento apropriado após a construção de uma instância do `AlunoComponent`. para saber mas sobre os *Lifecycle Hooks* como **ngOnInit** acesse: https://angular.io/guide/lifecycle-hooks.

Abra o arquivo `src/app/aluno/aluno.component.ts`, chame o método `getAluno()` dentro do `ngOnInit()`:

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[];
  alunoSelecionado: Aluno; 

  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  } /* Esse método será chamado sempre que a instância de AlunoComponent
   for criado assim ele já carrega nossa lista de alunos do nosso Service
    */
  
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; 
  }
  
  getAlunos() :void {
    this.alunos = this.alunoService.getAlunos();
  }
}
```
Bem até agora acho que deve estár tudo funcionado sem erros, se etiver com algum erro tente rever os passos. :v:

#### 15 - Entendendo Observable data (Não pule é importante!!! :angry: )

O método `AlunoService.getAlunos()` possui uma assinatura síncrona, o que implica que o `AlunoService` pode buscar heróis de maneira síncrona. O `AlunoComponent` consome o resultado `getAlunos()` como se os alunos pudessem ser obtidos de forma síncrona. (toda vez que eu der um **F5** na página).


Isso não funcionará em um aplicativo real. Você está fugindo agora porque o serviço atualmente muda Alunos. Mas, em breve, nosso aplicativo buscará alunos de um servidor remoto, que é uma operação assíncrona.

O `AlunoService` deve aguardar que o servidor responda, `getAlunos()` não pode retornar imediatamente com dados do Aluno se não o navegador ficará bloqueado enquanto o serviço aguarda carregar a lista de Alunos.

`AlunoService.getAlunos()` deve ter uma assinatura assíncrona de algum tipo.

Pode levar um retorno de chamada. Poderia devolver com uma [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise). ou Poderia retornar um [Observable](https://coryrylan.com/blog/angular-observable-data-services).


Neste tutorial, o `AlunoService.getAlunos()` retornará um *Observable* em parte porque ele usará o método Angular `HttpClient.get` para buscar os alunos e `HttpClient.get()` retorna um *Observable*.

Para saber mais como requisições HTTP funcionam no angular acesse: https://angular.io/tutorial/toh-pt6

#### 16 - Criando Observable de AlunoService

`Observable` é uma das classes na biblioteca [RxJS](http://reactivex.io/rxjs/).

Posteriormente, vamos aprender que os métodos `HttpClient` do Angular retornam **RxJS** `Observables`. por enquanto vamos simular a obtenção de dados do servidor com a função **RxJS** `of()`.

#### 16.1 - A Biblioteca RxJS no nosso projeto.

A biblioteca ReactiveX para JavaScript.

RxJS é uma biblioteca para programação reativa usando o *Observables*, tornando mais fácil compor código assíncrono ou baseado em retorno de chamada. 

Este projeto é uma reescrita de Reactive-Extensions / RxJS com melhor desempenho, melhor modularidade, melhores pilhas de chamadas devolvíveis, enquanto se mantém principalmente compatível com versões anteriores, com algumas mudanças de ruptura que reduzem a superfície da API.

Para saber mais sobre essa biblioteca acesse: http://reactivex.io/rxjs/

Quando usamos o Angular CLI para criar nosso projeto essa biblioteca já será adicionada automaticamente em nosso projeto, assim basta fazer a importação de suas classes quando precisar.

Então vamos lá, abra o arquivo `src/app/aluno.service.ts`, e faça as seguinte importações

```ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; //Importanto a classe Observable da biblioteca
import { of } from 'rxjs/observable/of'; //Importanto a função of da biblioteca

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos';

@Injectable()
export class AlunoService {

  constructor() { }
  
  getAlunos(): Aluno[] {
    return ALUNOS;
  }
}
```
#### 16.2 - Modificando o Método getAlunos

Ainda no arquivo  `src/app/aluno.service.ts`, Modifique o método `getAlunos` para que ele retorne um objeto do tipo *Observable* contendo um array de Aluno:

```ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; //Importanto a classe Observable da biblioteca
import { of } from 'rxjs/observable/of'; //Importanto a função of da biblioteca

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos';

@Injectable()
export class AlunoService {

  constructor() { }
  
  getAlunos(): Observable<Aluno[]> { //Modifique o método para retornar um Observable contendo um array de Aluno
    return of(ALUNOS); //use o função of() para retornar o objeto do tipo Observable contedo nosso mock de alunos
  }
}
```
Provavelmente isso vai dar :shit: na sua aplicação mas não se preocupe vamos consertar isso.

#### 16.3 - Subscribe (Inscrevendo-se) em AlunoComponent

O método `AlunoService.getAlunos` era usado para retornar um **array** de `Alunos[]`. Agora retorna um `Observable<Aluno[]>`.(Por isso está dando erro ... :sweat:)

Vamos ter que se ajustar a essa diferença em `AlunoComponent`.

Abra o arquivo `src/app/aluno/aluno.component.ts`, e encontre o método `getAlunos` e substitua-o pelo seguinte código :

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[];
  alunoSelecionado: Aluno; 

  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; 
  }
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos); /* Aqui chamamos usamos o método subscribe de Observable que recebe um callback*/
  }
}
```

O `Observable.subscribe()` é a diferença crítica.

A versão anterior atribui uma matriz de alunos à propriedade dos alunos do componente. A atribuição ocorre de forma síncrona, como se o servidor pudesse retornar alunos instantaneamente ou o navegador pudesse congelar a interface do usuário enquanto aguardava a resposta do servidor.

Isso não funcionará quando o AlunoService realmente estiver fazendo solicitações de um servidor remoto.

Agora a nova versão espera que o **Observable** emita a matriz de alunos - o que poderia acontecer agora ou vários minutos a partir de agora. Em seguida, o `subscribe` passa a matriz emitida para o callback, que define a propriedade dos alunos do componente. usando **arrow function** (=>) do ES6, para saber mais sobre ***Arrow Funcions*** acesse: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Essa abordagem assíncrona irá funcionar quando o `AlunoService` solicitar alunos do servidor.


#### 17 - Mostrando as mensagens

O que faremos com essas mensagens:

- Criar `MessageComponent` que exiba as mensagens do aplicativo na parte inferior da tela.
- Criar  um `MessageService` injetável e em todo o aplicativo para enviar mensagens a serem exibidas (Isso já tá ok :white_check_mark:)
- Injetar `MessageService` em `AlunoService`
- Mostrar uma mensagem quando o `AlunoService` buscar um aluno com sucesso.


#### 18 - Criando MessagesComponent

Usando o Angular CLI crie o `MessagesComponent`:

```sh
ng g c messages
```
Isso irá criar os seguintes arquivos:

- src/app/messages/messages.component.css
- src/app/messages/messages.component.html
- src/app/messages/messages.component.spec.ts
- src/app/messages/messages.component.ts

Modificará o arquivo `src/app/app.module.ts`, adicionado em suas `declarations` o `MessagesComponent`


#### 19 - Adicionando o seletor do novo componente

Abrar o arquivo `src/app/app.component.html`, e nele vamos adicionar o seletor de `MessagesComponent`:

```html
<h1>{{ title }}</h1>
<app-aluno></app-aluno> 
<app-messages></app-messages> <!-- Seletor do componente de Mensagem -->
```

#### 20 - Modificando MessageService

Abra o arquivo `src/app/message.service.ts`, e vamos colocar o seguinte conteúdo:

```ts
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
```

#### 21 - Injetando MessageService em AlunoService

Abra o arquivo `src/app/aluno.service.ts`, e faça as seguintes modificações:

```ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos';

import { MessageService } from './message.service'; //Impote MessageService

@Injectable()
export class AlunoService {

  constructor(private messageService: MessageService) { } /* Injetamos 
  agora no nosso Contrutor uma propriedade privada na nossa classe
  chamada messageService já carregando uma  instancia de MessageService */
  
  getAlunos(): Observable<Aluno[]> {
    return of(ALUNOS);
  }
}
```

#### 22 - Enviando a Mensagem de AlunoService


Ainda com o arquivo `src/app/aluno.service.ts`, vamos modificar o nosso método `getAlunos` para para enviar uma mensagem quando buscar os Alunos:

```ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos';

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  constructor(private messageService: MessageService) { }
  
  getAlunos(): Observable<Aluno[]> {
    this.messageService.add('Alunos Encontrados...'); //Adicione a ao service de mensagem
    return of(ALUNOS);
  }
}
```

#### 23 - Mostrando a mensagem de AlunoService

Vamos dificar nosso `MessagesComponent`, abra o arquivo `src/app/messages/messages.component.ts`, faça as seguintes modificações:

```ts
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
```
#### 23.1 - Editando o tamplate da mensagem

Abra o arquivo `src/app/messages/messages.component.html`, e vamos agora editar o seu template como abaixo:

```ts
<div *ngIf="messageService.mensagens.length"> <!-- verifica se existe alguma mensagem no array e mensagens -->
  <h2>Mensagens</h2>
  <div *ngFor='let message of messageService.mensagens'> {{message}} </div><!-- faz um loop mostrando cada mensagem -->
  <button (click)="messageService.clear()">Fechar</button><!-- botão que chama a função que limpa o array de mensagens -->
</div>
```

#### 24 -  Sinta-se a vontade para melhorar esse CSS :wink:


#### Até a próxima aula! :sweat_smile:

## [Atividade prática da aula 10](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-11/Atividade)


# Referências - para saber mais...
 - https://angular.io/
 - http://reactivex.io/rxjs/
 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise :point_left: Artigo em português
 - https://coryrylan.com/blog/angular-observable-data-services
 - http://blog.caelum.com.br/ioc-e-di-para-frameworks-mvc/ :point_left: Artigo em português
 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions :point_left: Artigo em português


[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)