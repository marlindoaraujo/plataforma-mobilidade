# Plataforma de Mobilidade Corporativa - (Aula 12)

## Trabalhando com Rotas (Ná prática)



#### -01 - Editando a Aplicação feita na aula 11

Vamos motificar o exemplo feito no tutorial da aula 11, para isso abra-o exemplo que você criou através do tutorial.

Tá para você que não fez mas queria muito mais muito fazer esses passos você pode clonar o exemplo diretamente do seguinte repositório: https://github.com/VitorHugoSilva/ExemploAula11Angular.

Obs: Não esquece de rodar o ```npm install``` para instalar os pacotes que são usados nesse projeto.

**Serio que você vai clonar??? :neutral_face: Vai lá tenta fazer os passos da aula 11, garanto que você vai aproveitar melhor esses aqui :wink:**

#### 00 - Abra o servidor para rodar a aplicação.

Use o comando:

```sh
ng serve -o
```


#### 01 - Trabalhando com Rotas

Uma prática recomendada angular é carregar e configurar as rotas em um módulo de nível superior separado que é dedicado ao roteamento e importado pela raiz do AppModule. Por convenção, o nome da classe do módulo é `AppRoutingModule` e está no `app-routing.module.ts` na pasta `src/app`. Vamos gerá-la com o Angular CLI.

Use o comando: 
```sh
ng generate module app-routing --flat --module=app
```
Os parâmetros
- --flat: Coloca o arquivo em `src/app` em vez de uma pasta própria.
-  --module=app: Informa a CLI para registrá-lo no array de `imports` do `AppModule`.

#### 02 - Adicionado rotas

As rotas indicam o que exibir quando um usuário clica em um link ou cola um URL na barra de endereço do navegador.

Uma rota angular típica tem duas propriedades:

- `path`: uma string que corresponde ao URL na barra de endereço do navegador.
- `component`: o componente que o router deve criar ao navegar para essa rota.

Se você pretende navegar para o AlunoComponent quando o URL é algo como `localhost:4200/alunos`.

Importe o AlunoComponent para que você possa fazer referência a ele em um Route. Em seguida, defina um conjunto de rotas com uma única rota para esse componente.

Abra o arquivo `src/app/app-routing.module.ts`, e faça as seguintes modificações

```ts
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; //apague essa importação

import { RouterModule, Routes } from '@angular/router' //Importe RouterModule, Routes

import { AlunoComponent } from './aluno/aluno.component'; //Importe o componente de Aluno

const routes: Routes = [ // crie uma constante com um array de objetos do tipo rota
  { path: 'alunos', component: AlunoComponent } /* indique que quando acessar localhost:4200/alunos 
  ele chamará Alunocomponent */
];

@NgModule({
  /*imports: [
    CommonModule
  ],
  declarations: [] */ // Apague a declarações de um módulo comum
  exports: [ RouterModule  ] //Adicione a propriedade exports com o array e valor de RouterModule
})
export class AppRoutingModule { }
```
#### 03 - Importando RouterModule.forRoot()

Ainda no arquivo `src/app/app-routing.module.ts`, precisamos inicializar o router e faze-lo ouvir as mudanças na localização do navegador.

Adicione `RouterModule` à o array  `@NgModule.imports` e configure-o com as rotas em um passo, chamando `RouterModule.forRoot()` dentro do array de `imports`, assim:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent }
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ], //Adicione impots RouterModule.forRoot(routes) isso irá configurar a sua lista de rotas
})
export class AppRoutingModule { }
```

#### 04 - Utilizando RouterOutlet

Agora precisamos criar uma lacuna no nosso layout onde será carregada nosso componente, parra isso usamos o recurso de `RouterOutlet`, Abra o arquivo `src/app/app.component.html`, e adicione a seguinte linha:

```html
<h1>{{ title }}</h1>
<router-outlet></router-outlet> <!-- Seletor do componente RouterOutlet -->
<app-messages></app-messages>
```

#### 05 - Testando nossa rota


Vá na barra de url do nosso navegador e teste a seguinte url: `http://localhost:4200/alunos`.
:sparkles: Magica!! :sparkles:

Agora toda vez que acessarmos essa url, o componente de Aluno será carregada para dentro `<router-outles></router-outles>`
Legal né? :smiley:

#### 06 - Criando links para as nossas Rotas (routerLink)

Ainda no arquivo `src/app/app.component.html`, vamos criar uma barra de navegação e cada `<a>` irá chamar uma rota especifica utilizando a propriedade `routerLink`, então faça as seguintes mofificações:

```html
<h1>{{ title }}</h1>
<nav>
  <a routerLink="/alunos">Alunos</a> <!-- Link para a rota de alunos -->
</nav>
<router-outlet></router-outlet> 
<app-messages></app-messages> 
```

#### 07 - Criando uma tela Principal (Dashboard)

Vamos criar uma tela onde será centralizado o acesso das nossas outras páginas, para isso vamos cria um novo componente usando o Angular CLI:

```sh
ng generate component dashboard
```

Isso irá criar os arquivos:
- src/app/dashboard/dashboard.component.css
- src/app/dashboard/dashboard.component.html
- src/app/dashboard/dashboard.component.ts
- src/app/dashboard/dashboard.component.spec.ts

 E atualizar o `src/app/app.module.ts` adicionado no *array* de `declarations`, o `DashboardComponent`.

#### 08 - Modificando nossa Dashboard

Vamos agora modificar nossa dashboard fazando ela carregar os 4 primeiro alunos, posteriormente você fará em exercício, essa tela também carregar os 4 primeiros professores da lista :wink:

#### 08.1 - Editando DashboardComponent

Abra no arquivo `src/app/dashboard/dashboard.component.ts`, e faça as seguintes mofificações:

```ts
import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno/aluno'; //importe nosso modelo de dados de Aluno
import { AlunoService } from '../aluno.service'; //Importe nosso service de Aluno

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  alunos: Aluno[] = []; //crie uma propriedade chamada alunos do tipo array de Aluno com valor de uma rray vazio

  constructor(private alunoService: AlunoService) { }/*Injete a uma propriedade
  privada na nossa classe chamada alunoService do tipo AlunoService*/

  ngOnInit() {
    this.getAlunos(); //Executa o método assim que instância de DashboardComponent for carregada
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos.slice(0,4)); // Carregue os 4 primeiro alunos da lista
  }
}
```

#### 08.2 - Editando dashboard.component.html

Abra no arquivo `src/app/dashboard/dashboard.component.html`, e faça as seguintes mofificações:

```html
<h3>Alunos Recentes</h3>
<div style="padding: 10px 0; margin: 0"><!-- Coloquem esse css no lugar dele que é em src/app/dashboard/dashboard.component.css -->
  <a *ngFor="let aluno of alunos"><!-- loop para os 4 primeiros alunos -->
    <div style="background-color: #607D8B; color: #fff; width: 22%; float: left; margin: 1%; text-align: center;"><!-- Coloquem esse css no lugar dele que é em src/app/dashboard/dashboard.component.css -->
      <h4>{{aluno.nome}}</h4><!-- mostra o nome de cada aluno que passar pelo loop -->
    </div>
  </a>
</div>
```

#### 09 - Adicionando uma rota para Dashboard

Agora vamos abrir nosso Módulo de rotas em `src/app/app-routing.module.ts`, e vamos fazer as seguintes modificações:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component'; //Importe nossa class DashboardComponent

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent },
  { path: 'dashboard', component: DashboardComponent } // adicione o caminho da nossa rota, não esquecer da virgula na linha acima ;-)
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ], //Adicione impots RouterModule.forRoot(routes) isso irá configurar a sua lista de rotas
})
export class AppRoutingModule { }
```

#### 10 - Adicionando nossa Dashboard a rota padrão /

Agora vamos fazer a dashboard ser carregada primeiro assim que carregar a plicação na url: `http://localhost:4200/`,
abra novamente o arquivo `src/app/app-routing.module.ts`,  e adicione a nova rota:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }// Esta rota redireciona uma URL que combina totalmente o caminho vazio com a rota cujo caminho é '/ dashboard'.
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
```

#### 11 - Adicionando link na nossa barra de navegação

Vamos até o arquivo `src/app/app.component.html`, e faça as seguintes modificações:

```html
<h1>{{ title }}</h1>
<nav>
  <a routerLink="/dashboard">Dashboard</a><!-- Link para a rota de Dashboard -->
  <a routerLink="/alunos">Alunos</a> 
</nav>
<router-outlet></router-outlet> 
<app-messages></app-messages> 

```
#### 12 - Navegando nos detalhes de Aluno

O `DetalheAlunoComponent` exibe detalhes de um Aluno selecionado, o `DetalheAlunoComponent` só é visível na parte inferior do `AlunoComponent`.
Nosso usuário deve poder acessar esses detalhes de três maneiras. 
- 1ª - Ao clicar em um aluno na lista do  no Dashboard;
- 2ª - Ao clicar em um aluno na lista dos Alunos;
- 3ª - Ao colar um URL de "link" na barra de endereço do navegador que identifica o Aluno para exibição.

Então vamos criar essas formas de acessa-lo;

#### 12.1 - Refatorando o carregamento dos detalhes de Alunos em AlunoComponent

Quando o nosso usuário clica em um item de aluno no `AlunoComponent`, o aplicativo deve navegar até o `DetalheAlunoComponent`, substituindo a exibição da lista de Alunos pela visão detalhada do Aluno. A exibição de lista de Aluno não deve mais mostrar os detalhes do Aluno.

Abra o arquivo `src/app/aluno/aluno.component.html`, e exclua o elemento `<app-hero-detail>` da parte inferior.

```html
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos" (click)="selecionaAluno(aluno)" [class.selecionado]="aluno === alunoSelecionado">
    <span> {{ aluno.id }} </span> {{ aluno.nome }}
  </li>
</ul>
<hr>
<!-- <app-detalhe-aluno [aluno]="alunoSelecionado"></app-detalhe-aluno> --> <!-- Remova esse cara aqui -->
```

Agora ao clicar em aluno na lista não carrega mais o seus detalhes. :confused:

#### 12.2 - Adicionando rota para os detalhes

Vamos fazer nosso detalhes dos alunos serem mostrados quando acessar a URL como exemplo `http://localhost:4200/aluno/1`, assim ele irar carregar os detalhes do aluno com id = 1.

Então abra o arquivo `src/app/app-routing.module.ts`, e faça as seguintes modificações:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component'; //importa o  DetalheAlunoComponent 

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent },
  { path: 'aluno/:id', component: DetalheAlunoComponent }, /* Difine a rota os :id 
  indica que esse será um parâmentro a ser passado similar aos paramentros na 
  roda no laravel: aluno/{id} */
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
```

#### 13 - Lincando os alunos na nossa Dashboard

Agora vamos fazer nosso links na dashboard chamar os detalhes do aluno correspondente, para isso abra o arquivo `src/app/dashboard/dashboard.component.html`, faça as seguintes modificações:

```html
<h3>Alunos Recentes</h3>
<div style="padding: 10px 0; margin: 0">
  <a *ngFor="let aluno of alunos" routerLink="/aluno/{{aluno.id}}"><!-- Adicione o routerLink passando a url do aluno com seu id pego dinamicamente -->
    <div style="background-color: #607D8B; color: #fff; width: 22%; float: left; margin: 1%; text-align: center;">
      <h4>{{aluno.nome}}</h4>
    </div>
  </a>
</div>
```
Perceba que agora ao clicar no nosso aluno na dashboard ele muda a url, e carrega o componente, porém ele não mostra os detalhes já que atualmente nosso componete está esperando uma instância de Aluno, e não um id para mostrar os detalhes, mas já vamos consertar isso...

#### 14 - Lincando os alunos na nossa Lista de alunos

Vamos agora adicionar o `routerLink` de aluno na nossa lista de alunos portanto abra o arquivo `src/app/aluno/aluno.component.html`, e faça as seguintes modificações:
```html
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos">
    <a routerLink="/aluno/{{aluno.id}}" ><!-- Adicione a tag a com  routerLink apontando para a rota de detalhe de aluno e remova a função de click que não será mais necessária -->
    <span> {{ aluno.id }} </span> {{ aluno.nome }}
    </a>
  </li>
</ul>
<hr>
```
Novamente a mesma situação do passo anterior, clicar no nosso aluno na lista ele muda a url, e carrega o componente, porém ele não mostra os detalhes já que atualmente nosso componete está esperando uma instância de Aluno, e não um id para mostrar os detalhes, mas já vamos consertar isso...


#### 15 - Removendo código não utilizado em AlunoComponent

Vamos agora fazer uma limpa em algumas coisas, abra o arquivo `src/app/aluno/aluno.component.ts`, e remova os seguintes códigos que não usamos mais:

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
  // alunoSelecionado: Aluno; remova esse atributo que não usamos mais

  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  // selecionaAluno(aluno: Aluno): void {
  //   this.alunoSelecionado = aluno; 
  // } // Remova essa esse método que não usamos mais
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }
}
```

#### 16 - Mostrando aluno pelo id

O `DetalheAlunoComponent` precisa de uma nova maneira de obter o herói para exibição.

Então vamos fazer as seguintes modificações:
- Obtenha a rota que a criou,
- Extraia o id da rota
- Pegue o aluno com esse id do servidor através do `AlunoService`

Então abra o arquivo `src/app/detalhe-aluno/detalhe-aluno.component.ts`, e adicione as seguintes Modificações:

```ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Importe ActivatedRoute
import { Location } from '@angular/common';//Importe Location

import { Aluno } from '../aluno/aluno';
import { AlunoService } from '../aluno.service'; //Importe o AlunoService

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location) { } /*Injete as seguintes propriedades na nossa classe*/

  ngOnInit() {
  }
}
```

O `ActivatedRoute` contém informações sobre a rota para esta instância do `DetalheAlunoComponent`. Este componente está interessado nos parâmetros da rota extraída do URL. O parâmetro "id" é o id do aluno a ser exibido.

O `AlunoService` obtém dados alunos do servidor remoto e este componente irá usá-lo para obter o aluno para exibição.

O `Location` é um serviço angular para interagir com o navegador. Vamos usa-lo mais tarde para navegar de volta para a visualização que navegou aqui.


#### 16.1 - Extraindo o id do parâmetro da rota

Ainda no aquivo `src/app/detalhe-aluno/detalhe-aluno.component.ts`, faça as seguintes modificações
```ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';

import { Aluno } from '../aluno/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location) { } 

  ngOnInit() {
    this.getAluno(); //chama o método depois de carregar a instância de DetalheAlunoComponent
  }

  getAluno(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //Recebe o valor do Parâmetro da rota
    this.alunoService.getAluno(id) //calma que ainda vamos criar esse método no nosso service
      .subscribe(aluno => this.aluno = aluno);
  }
}
```
O `route.snapshot` é uma imagem estática da informação da rota logo após a criação do componente.

O `paramMap` é um dicionário de valores de parâmetros de rota extraídos do URL. A chave "id" retorna o id do aluno para buscar.

Os parâmetros da rota são sempre cordas. O operador JavaScript (+) converte a string em um número, qual é o nome de um aluno.

O navegador atualiza e o aplicativo com um erro no compilador :see_no_evil: . `AlunoService` não possui um método `getAluno()`.

#### 16.2 - Adicionado getAluno em AlunoService

Abra o arquivo 

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
    this.messageService.add('Alunos Encontrados...');
    return of(ALUNOS);
  }

  getAluno(id: number):  Observable<Aluno> {
    this.messageService.add(`Carregando aluno id=${id}`);
    return of(ALUNOS.find(aluno => aluno.id === id));
  }//Método que recupera o Aluno pelo id da Lista de Aluno 
}
```
Pronto agora tudo deve estár funcionando :relaxed:, se não volte e tente novamente...


#### 17 - Criando a opção de Voltar

Abrar o arquivo `src/app/detalhe-aluno/detalhe-aluno.component.html`, e adcione o bontão voltar:

```html
<div *ngIf="aluno">
  <h2>{{ aluno.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ aluno.id }}</div>
  <div>
  <span>nome: </span>
       <input [(ngModel)]="aluno.nome" placeholder="nome">
  </div>
</div>

<button (click)="goBack()">Voltar</button><!-- Botão Voltar -->
```
#### 18 - Criando o método goBack()

Abrar o aquivo `src/app/detalhe-aluno/detalhe-aluno.component.ts`, e faça a seguinte modificação:
```ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';

import { Aluno } from '../aluno/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location) { } 

  ngOnInit() {
    this.getAluno();
  }

  getAluno(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.alunoService.getAluno(id)
      .subscribe(aluno => this.aluno = aluno);
  }

  goBack(): void {
    this.location.back(); //função para voltar a URL anterior
  }
  
}
```
#### 19 - Testando nossas rotas
Pronto agora tudo deve funcionar perfeitamente, faça os teste, caso tenha dado algum erro tente reiniciar o servidor, se o erro continuar tente fazer os passos novamente, se não me procure, só não desista :wink:


#### 20 -  Sinta-se a vontade para melhorar esse CSS :wink:


#### Até a próxima aula! :sweat_smile:

## [Atividade prática da aula 12](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-12/Atividade)


# Referências - para saber mais...
 - https://angular.io/


[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)