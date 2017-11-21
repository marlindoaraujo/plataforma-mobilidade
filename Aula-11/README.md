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
- em `MessagesComponent` que exibe essa mensagem.


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

..continua...

#### Até a próxima aula! :sweat_smile:




# Referências - para saber mais...
 - https://angular.io/

[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)