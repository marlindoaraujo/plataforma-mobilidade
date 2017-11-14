# Plataforma de Mobilidade Corporativa - (Aula 10)

#### 01 -  Criando uma nova aplicação

Após a instalação do Angular CLI vamos criar uma nova aplicação usando o comando terminal:

```sh
ng new aula10
```
Isso irá criar uma pasta chamada `aula10/` com um projeto angular.

Abra basta a pasta do projeto:
```
cd aula10
```
### 02 - Abra Servidor

Para iniciar o servidor vá a pasta do projeto criado e execute o comando:

```sh
ng serve --open
```
#### 03 - Primeiras as modificaçẽos

Abra o arquivo (`app.component.ts`) e modifique o valor da propriedade `title` para 'Lista de Alunos':

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Alunos';
}
```
Abra o arquivo de template desse componente (`app.component.html`) Apague todo o seu conteúdo e coloque o seguinte conteúdo:

```html
    <h1>{{title}}</h1>
```
Isso irá mostar na tela a Frase 'Lista de Alunos' com a formatação de um `<h1>`:

#### 04 -  Criando componente de aluno

Para criar um novo componente utilizando o Angular CLI basta usar o comando.
```sh
ng g c aluno
```
esse comando irá criar os arquivos
- src/app/aluno/aluno.component.css
- src/app/aluno/aluno.component.html
- src/app/aluno/aluno.component.spec.ts
- src/app/aluno/aluno.component.ts

E atualizar o arquivo `src/app/app.module.ts` adicionando em suas *declarations*  a classe `AlunoComponent`
Para saber mais acesse: https://angular.io/guide/attribute-directives

#### 05 - Modificando aluno.component.ts

Verifique o arquivo `/src/app/aluno/aluno.component.ts` e crie uma propriedade chamada `aluno` com o valor: 'Vitor':
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  aluno: string = 'Vitor'; //propriedade aluno
  constructor() { }

  ngOnInit() {
  }

}
```

#### 06 - Modificando aluno.component.html
Modifique o template do arquivo `/src/app/aluno/aluno.component.html`:

```html
<h1>{{ aluno }}</h1>
```
#### 07 - Modificando app.component.html
Abra o arquivo de template desse componente (`app.component.html`)  e adicione o seletor do componente de aluno:
```html
<h1>{{title}}</h1>
<app-aluno></app-aluno> <!-- Seletor do componente de aluno -->
```
Isso irá mostrar o conteúdo do template de aluno na tela principal.

#### 08 - Criando a classe de Aluno
Para melhor trabalhar com nossos alunos vamos criar uma classe modelo (*Model*) de dados para nosso objetos do tipo alunos, crie um arquivo com o nome `aluno.ts` dentro do dirertório:  `/src/app/aluno/`, e nele adicone a classe que será o modelos de dados dos nosso alunos. Nossos objetos alunos deverão ter 2 atributos sendo o primeiro o seu `id` do tipo `number` e o segundo `nome` do tipo `string`:

```ts
export class Aluno {
	id: number;
	nome: string;
}
```

#### 09 - Usando modelo de dados de Aluno em aluno.component.ts

Abra o arquivo `/src/app/aluno/aluno.component.html` e agora vamos modificar a propriedade `aluno` para um objeto do tipo `Aluno`:

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno'; //importe a Classe Aluno para ser utilizada

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
    aluno: Aluno = {
    id: 1,
    nome: 'Vitor'
  }; // Agora temos uma propriedade do tipo Aluno que deve conter id e nome
  constructor() { }

  ngOnInit() {
  }
}
```

#### 10 - Modificando o template aluno.component.html

Agora para mostrar os valores das propriedades alunos devemos fazer as seguintes modificaçẽos em `/src/app/aluno/aluno.component.html`:
```html
<h2>{{ aluno.nome | uppercase }} Detalhes</h2> <!-- O filtro '| uppercase' Isso irá mostrar o nome Vitor em caixa alta -->
<div><span>id: </span>{{ aluno.id }}</div>
<div><span>nome: </span>{{ aluno.nome }}</div>
```

### 11 - Criando uma lista de Alunos

Como ainda não estamos trabalhando com uma uma API que forneça os dados dos nossos alunos vamos simular uma lista de alunos em um arquivo, geralmente os dados que servem para serem utilizados como dados de simulação, falsos e etc.. São chamados de **mock**, então vamos criar nosso **mock** de alunos, crie um arquivo chamado `mock-alunos.ts` dentro do dirertório:  `/src/app/aluno/` e dentro dele vamos adicionar um *array* de alunos:
```ts
import { Aluno } from './aluno'; // Importando nossa classe de modelo de Aluno

export const ALUNOS: Aluno[] = [ //Criando um aconstate com um array de Objetos do tipo Aluno
	{ id: 2, nome: 'Anderson'},
	{ id: 3, nome: 'Weslley'},
	{ id: 4, nome: 'Milton'},
	{ id: 5, nome: 'Renan'}
];
```

#### 12 - Adicionando o mock de alunos em aluno.component.ts
Abra o arquivo `/src/app/aluno/aluno.component.ts` e vamos modificar a propridedade a `aluno` para `alunos` e fazer com que ela receba a contante `ALUNOS` do nosso arquivo de **mock** :

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno'; //importe a Classe Aluno para ser utilizada
import { ALUNOS } from './mock-alunos'; //Importe a constante de ALUNOS

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] =  ALUNOS; // Modifique a propriedade para alunos do tipo array de alunos e atribua o valor da constante de ALUNOS
  constructor() { }

  ngOnInit() {
  }
}
```
#### 13 - Listado os alunos com `*ngFor`
Precisamos agora listar nosos alunos no template de `aluno.component.html`, para fazer isso de forma automática podemos utilizar um recurso do angular Chamado **Diretiva** (*directive*), e em nosso caso presimos repetir os elementos que irão listar nossos alunos, e para isso usaremos a diretiva `*ngFor`, Abra o arquivo `/src/app/aluno/aluno.component.html`, e faça as seguintes alterações:
```html
<h2>{{ alunos[0].nome | uppercase }} </h2> 
<div><span>id: </span>{{ alunos[0].id }}</div>
<div><span>nome: </span>{{ alunos[0].nome }}</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos"> <!-- *ngFor irá repetir esse elemento com numero de alunos no mock -->
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
```
Agora será listados todos os alunos. e o primeiro aluno da lista estará selecinado nas informações acima da lista.

### 14 - Tornando a seleção de alunos dinâmica com *event binding*

O angular trás um recurso chamado (*event binding*), onde você consegue de forma reativa usar os recursos de eventos, com `onClick`, `onBlur`, `onFocus` e etc... Vamos utilizar o clik nos items da nossa lista, ao cliar e um item (`<li>`) ele ira chamar uma função, modifique o arquivo /src/app/aluno/aluno.component.html`.
```html
<h2>{{ alunos[0].nome | uppercase }} </h2> 
<div><span>id: </span>{{ alunos[0].id }}</div>
<div><span>nome: </span>{{ alunos[0].nome }}</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)"> <!-- Isso irá chamar o método selecionaAluno toda vez que o elemento for clicado e passando com parametro o objeto de aluno do elemento clicado. -->
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
```
#### 15 - Criando o método selecionaAluno

Em `/src/app/aluno/aluno.component.ts` vamos criar uma propriedade do tipo `Aluno` chamada `alunoSelecionado` que irá receber o objeto passa como parâmetro do método `selecionaAluno`:
```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos: Aluno[] =  ALUNOS;
  alunoSelecionado: Aluno; //propriedade que irá receber o objeto do parâmetro de selecionarAluno
  constructor() { }

  ngOnInit() {
  }
  selecionaAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno; // Um método sem retorno que recebe um aluno e atribue a propriedade alunoSelecionado
  }
}
```
#### 16 - Mostrando o aluno selecionado
Para mostrar o aluno selecionado abra o arquivo `/src/app/aluno/aluno.component.html` e faça as seguintes alterações:

```html
<h2>{{ alunoSelecionado.nome | uppercase }} </h2> 
<div><span>id: </span>{{ alunoSelecionado.id }}</div>
<div><span>nome: </span>{{ alunoSelecionado.nome }}</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)">
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
```
**Isso pode funcionar, mas vai gerar um erro** :weary:
O erro ocorre porque na primeira vez que a propridedade `alunoSelecionado` é carrega ela vem vazia, e ao tentar acessar uma propriedade de um objeto vazio é gerado um erro. vamos ao próximo passo para resolver isso. :wink:

#### 17 - Escondendo conteúdo com *ngIf
O `*ngIf` é uma **Diretiva** (*directive*) do Angular assim como o `*ngFor`, o `*ngIf` seve para mostrar ou não um elemento dependendo de sua condição, então vamos fazer que os detalhes de um alunos selecionado só sejam mostrados quando realmente alguem clicar sobre um aluno na lista e a propriedade `alunoSelecionado` tenha um valor, parra isso abra o arquivo `/src/app/aluno/aluno.component.html` e faça as seguintes modificações:
```html
<div *ngIf="alunoSelecionado"> <!-- Isso irá fazer esse elemento aparecer apenas quando a propriedade  alunoSelecionado um valor, que na prática retornará um true ara o *ngIF -->
  <h2>{{ alunoSelecionado.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ alunoSelecionado.id }}</div>
  <div><span>nome: </span>{{ alunoSelecionado.nome }}</div>
</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)">
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
```
Ao fazer isso nós nos livramos do erro anterior, pois agora só será carregado os detalhes quando realmente existir um aluno selecionado :v: 

#### 18 - Outras alterações
Podemos modificar de forma dinâmica as classe do `CSS` das nossas `<li>` selecinados usando o recurso de **Propriedades reativas** (*Property Binding*) do Angular, abra o arquivo `/src/app/aluno/aluno.component.html`  e faça as seguintes modificações:
```html
<div *ngIf="alunoSelecionado"> <!-- Isso irá fazer esse elemento aparecer apenas quando a propriedade  alunoSelecionado um valor, que na prática retornará um true ara o *ngIF -->
  <h2>{{ alunoSelecionado.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ alunoSelecionado.id }}</div>
  <div><span>nome: </span>{{ alunoSelecionado.nome }}</div>
</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)" [class.selecionado]="aluno === alunoSelecionado"> <!--  isso irá adiconar a classe .selecionado ao elemento toda vez que seu objeto aluno for identico ao objeto alunoSelecionado -->
    <span> {{ aluno.id }} </span> {{aluno.nome }}
  </li>
</ul>
```
#### 19 - Adiconado o estilo em aluno.component.css
Abra o arquivo `/src/app/aluno/aluno.component.css`, e adicione o seguinte estilo:
```css
.selecionado {
	background: #d7d7d7;
}
```
Esperava mais que eu sei né? :sweat_smile:, descupa é que eu não sou design :sleepy:

#### 20 - Sinta-se a vontade para melhorar esse css :wink:


#### Até a próxima aula! :sweat_smile:


## [Atividade prática da aula 10](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-10/Atividade)


# Referências - para saber mais...
 - https://angular.io/

[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)