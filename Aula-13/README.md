# Plataforma de Mobilidade Corporativa - (Aula 13)

## Trabalhando com requisições http, consumindo uma API feita em Laravel (Ná prática - Tá Acabando galera :v:)

#### -02 - Rodando nossa API

Para esse tutorial vamos precisar rodar nossa aplicação em Laravel que será nossa API, portanto clone o seguinte repositório: https://github.com/VitorHugoSilva/ExemploAula13API-Laravel, em uma pasta separada siga os passos que estão na descrição do `readme.md` do projeto para rodar o sevidor.

**Obs**.: Qualquer duvida de como rodar a aplicação Laravel consultar professor de Laravel :wink:

##### Lista de Rotas da nossa API
```php

/******************* 
*  Rotas de aluno  *
********************/
/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno
* Método: GET
* Descrição: Lista todos os alunos do banco
*/
Route::get('aluno','AlunoController@index');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1/edit
* Método: GET
* Descrição: Lista um aluno encontrado pelo seu id
*/
Route::get('aluno/{id}/edit','AlunoController@edit');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno
* Método: POST
* Descrição: Recebe dados de um aluno para salvar no banco
*/
Route::post('aluno','AlunoController@store');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1
* Método: PUT
* Descrição: Atualiza o dado de um aluno cujo id for passado
*/
Route::put('aluno/{id}','AlunoController@update');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1
* Método: DELETE
* Descrição: Exclui um aluno do bando cujo o id for passado
*/
Route::delete('aluno/{id}','AlunoController@destroy');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/buscar_aluno?busca=maria
* Método: GET
* Descrição: Busca alunos no banco com nome similar ao valor do parâmetro busca
*/
Route::get('buscar_aluno', 'AlunoController@buscar');


/***********************
*  Rotas de professor  *
************************/
/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor
* Método: GET
* Descrição: Lista todos os professores do banco
*/
Route::get('professor','ProfessorController@index');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1/edit
* Método: GET
* Descrição: Lista um professor encontrado pelo seu id
*/
Route::get('professor/{id}/edit','ProfessorController@edit');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor
* Método: POST
* Descrição: Recebe dados de um professor para salvar no banco
*/
Route::post('professor','ProfessorController@store');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1
* Método: PUT
* Descrição: Atualiza o dado de um professor cujo id for passado
*/
Route::put('professor/{id}','ProfessorController@update');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1
* Método: DELETE
* Descrição: Exclui um professor do bando cujo o id for passado
*/
Route::delete('professor/{id}','ProfessorController@destroy');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/buscar_professor?busca=paulo
* Método: GET
* Descrição: Busca professor no banco com nome similar ao valor do parâmetro busca
*/
Route::get('buscar_professor', 'ProfessorController@buscar');
```

Perceba que Nossa API já tem as rotas para os professores que vamos precisar para fazer a [Atividade Final](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-12/Atividade), :stuck_out_tongue_winking_eye:

#### -01 - Editando a Aplicação feita na aula 12

Vamos motificar o exemplo feito no tutorial da aula 11, para isso abra-o exemplo que você criou através do tutorial.

Tá para você que não fez mas queria muito mais muito fazer esses passos você pode clonar o exemplo diretamente do seguinte repositório: https://github.com/VitorHugoSilva/ExemploAula12Angular.

Obs: Não esquece de rodar o ```npm install``` para instalar os pacotes que são usados nesse projeto.

**Serio que você vai clonar??? :neutral_face: Vai lá tenta fazer os passos da aula 12, garanto que você vai aproveitar melhor esses aqui :wink:**

#### 00 - Abra o servidor para rodar a aplicação.

Use o comando:

```sh
ng serve -o
```
## E sim usaremos 2 servidores um na porta 8000 e outro na porta 4200

#### 01 - Iniciando nossas solicitações HTTP para nosso API em Laravel

Neste tutorial, vamos (finalmente) adicionarar os seguintes recursos de persistência de dados com a ajuda do `HttpClient` da Angular.
- O `AlunoService` obtém dados do aluno com solicitações `HTTP`;
- Vamos adicionar, **editar** e **excluir** aluno e **salvar** essas alterações por meio de `HTTP`;
- Vamos poder procurar por aluno pelo nome.

#### 02 - Habilitando HTTP services

`HttpClient` é o mecanismo do Angular para se comunicar com um servidor remoto por `HTTP`.

Para tornar o `HttpClient` disponível em todos os lugares do aplicativo, abra o arquivo `src/app/app.module.ts`, importe o `HttpClientModule` de `@angular/common/http`, Adicione-o à o *array* `@NgModule.imports`:

```ts

  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';// Faça a importação aqui!


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  import { AlunoService } from './aluno.service';
  import { MessageService } from './message.service';
  import { MessagesComponent } from './messages/messages.component';
  import { AppRoutingModule } from './/app-routing.module';
  import { DashboardComponent } from './dashboard/dashboard.component';

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent,
      MessagesComponent,
      DashboardComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule  // Adicione HttpClientModule nas importação
    ],
    providers: [ AlunoService, MessageService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

#### 03 - Alunos e HTTP

Vamos fazer nosso `AlunoService`, enviar nossas requisições para nossa API, então abra o arquivo `src/app/aluno.service.ts` e faça as seguintes modificações:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';// Faça a importação aqui

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno'; //crie uma propriedade com o valor da rota da nossa API que carrega a lista de alunos

  constructor(
  	private  http: HttpClient, // Faça a injeção da propriedade http do tipo HttpClient para as nossas requisições
  	private messageService: MessageService) { }
  
  getAlunos(): Observable<Aluno[]> {
  	this.messageService.add('Alunos Encontrados...');
  	return of(ALUNOS);
  }

  getAluno(id: number):  Observable<Aluno> {
  	this.messageService.add(`Carregando aluno id=${id}`);
  	return of(ALUNOS.find(aluno => aluno.id === id));
  }

  private log(mensagem: string) {
  	this.messageService.add('Aluno Service: ' + mensagem);
  }// Método para recebemos mensagens de log enquanto operamos nosso app
}
```

#### 04 - Carregando a lista do nossa API

Certifique que seu servidor da API esteja rodando em `http://127.0.0.1:8000/api/aluno`, agora abra novamente o arquivo `src/app/aluno.service.ts`, e modifique o método `getAlunos()` para ele agora carregar as informações do servidor e não mas do nosso **Mock** de alunos:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }
  
  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl); //use o http.get para enviar uma requisição GET para o servidor e receber seu retorno
  }

  getAluno(id: number):  Observable<Aluno> {
  	this.messageService.add(`Carregando aluno id=${id}`);
  	return of(ALUNOS.find(aluno => aluno.id === id));
  }

  private log(mensagem: string) {
  	this.messageService.add('Aluno Service: ' + mensagem);
  }
}
```

Atualize o navegador. Os dados dos alunos devem ser carregados com sucesso a partir do servidor. :v:

Se funcionou - Pega P!@#$!!!!! :tada: :confetti_ball: :balloon:

Você trocou `http.get` para e o aplicativo continua funcionando sem outras alterações porque ambas as funções retornam um `Observable<Aluno>`.


#### 05 - Entendendo o Retorno Http


Todos os métodos `HttpClient` retornam um **RxJS** `Observable` de algo.

`HTTP` é um protocolo de solicitação/resposta. Quando fazemos um pedido, ele retorna uma única resposta.

Em geral, um `Observable` pode retornar vários valores ao longo do tempo. Um `Observable` de `HttpClient` sempre emite um **valor único** e, em seguida, é concluído.

Nossa chamada `HttpClient.get` em particular retorna um `Observable<Aluno>`, literalmente "um observável de *arrays* de alunos". Na prática, ele só retornará um único *array* de alunos.


#### 06 - Entendendo o tipo de resposta

`HttpClient.get` retorna o corpo da resposta como um objeto `JSON` não tipificado por padrão. Aplicando o especificador de tipo opcional, `<Aluno[]>`, fornece um objeto de resultado digitado.

A forma dos dados `JSON` é determinada pela API de dados do servidor. A Nossa API de dados Laravel retorna os dados dos Alunos como um `JSON`.


#### 07 - Tratando possiveis errors

As coisas podem correm errado :cry:, especialmente quando você está recebendo dados de um servidor remoto. O método `AlunoService.getAlunos()` deve pegar erros e fazer algo apropriado.

Para detectar erros, você da um **"pipe"** (canaliza) no resultado observável de `http.get()` através de um operador da biblioteca **RxJS**  chamado `catchError()`.

Abra o arquivo `src/app/aluno.service.ts`, importe o  `catchError` de `rxjs/operators`, juntamente com alguns outros operadores que vamos precisará mais tarde:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';//Importe o catchError de rxjs/operators

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }
  
  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		catchError(this.handleError('GetAlunos',[])) /* Agora, vamos dar um .pipe() no resultado e dar-lhe um operador catchError()
  		nao se precupe com o método *handleError já já vamos criar ele ;-) */
  	);
  }

  getAluno(id: number):  Observable<Aluno> {
  	this.messageService.add(`Carregando aluno id=${id}`);
  	return of(ALUNOS.find(aluno => aluno.id === id));
  }

  private log(mensagem: string) {
  	this.messageService.add('Aluno Service: ' + mensagem);
  }
}
```

O operador `catchError()` intercepta um `Observable` que falhou. Ele passa o erro para nosso metódo `handleError()` que será um manipulador de erros que pode fazer o que deseja com o erro :wink: .

Em seguida o método `handleError()` relata o erro e, em seguida, retorna um resultado inócuo para que o aplicativo continue funcionando.


#### 08 - Criando nosso método handleError()

O Nosso  método gerenciador de erros será compartilhado por muitos métodos do `AlunoService`, portanto, ele é generalizado para atender às suas diferentes necessidades.

Em vez de lidar com o erro diretamente, ele retorna uma função de manipulação de erro para `catchError` que será configurado com o nome da operação que falhou e um valor de retorno seguro :sunglasses: .

Então abra o arquivo `src/app/aluno.service.ts`, e adicione o nosso método:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';//Importe o catchError de rxjs/operators

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  /**
 * Gerenciador da operação Http que falhou.
 * Deixe o aplicativo continuar sem parar com o erro.
 * @param operation - nome da operação que falhou
 * @param result - valor opcional para retornar como o resultado observável
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: envie o erro para a infra-estrutura de log remota
      console.error(error); // mostra o erro no console do navegador
 
      // TODO: Melhorar o trabalho de erro de transformação para o consumo do usuário
      this.log(`${operation} failed: ${error.message}`);
 
      // Deixa o aplicativo continuar funcionando retornando um resultado vazio.
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {
  	this.messageService.add(`Carregando aluno id=${id}`);
  	return of(ALUNOS.find(aluno => aluno.id === id));
  }

  private log(mensagem: string) {
  	this.messageService.add('Aluno Service: ' + mensagem);
  }
}
```

Depois de relatar o erro ao console, o manipulador constrói uma mensagem amigável ao usuário e retorna um valor seguro ao aplicativo para que ele continue funcionando.

Como cada método de serviço retorna um tipo diferente de resultado Observável, `handleError()` toma um parâmetro de tipo para que ele possa retornar o valor seguro como o tipo que o aplicativo espera.


#### 09 - Dando um "Tap" no nosso Observable :new_moon_with_face:


Os métodos de  `AlunoService` irão dar um "**tap**" no fluxo de valores observáveis e enviar uma mensagem (via `log()`) para a área de mensagens na parte inferior da página.

Eles vão fazer isso com o operador **RxJS** `tap`, que analisa os valores observáveis, fazer algo com esses valores e os passa.

Então abra o aquivo `src/app/aluno.service.ts`,e faça as seguintes modificações no método `getAlunos()`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';//Importe o catchError de rxjs/operators

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),//Adicione nosso tap
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {
  	this.messageService.add(`Carregando aluno id=${id}`);
  	return of(ALUNOS.find(aluno => aluno.id === id));
  }

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem); //mude a mensagem também \o/
  }
}
```

#### 10 - Obtendo um Aluno da API pelo seu id

Nossa API tem uma rota para receber o aluno por seu `id`, basta acessar a rota `http://127.0.0.1:8000/api/aluno/1/edit`, então vamos fazer nosso método `getAluno()` buscar um aluno nessa rota passando seu `id`, abra o arquivo `src/app/aluno.service.ts`, e faça as seguintes alterações no método `getAluno()`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';//Importe o catchError de rxjs/operators

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`; //Edita a url para nossa API

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), ////Adicione nosso tap
      catchError(this.handleError<Aluno>(`Erro ao carregar aluno id=${id}`)) // Capitura os possíveis 
     ); 
  }

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }
  
}
```
Existem três diferenças significativas de `getAluno`:

- Ele constrói uma URL de solicitação com o ID do aluno desejado.
- O servidor deve responder com um aluno único e não com uma série de alunos.
- Portanto, `getHero` retorna um `Observable<Aluno>`("um observável de objetos Aluno") em vez de um observável de *arrays* de aluno.


#### 11 - Atualizando um Aluno

Vamos editar o nome de um aluno na tela de detalhes do aluno. À medida que você digita, o nome do herói atualiza o título na parte superior da página. Mas quando você clica no botão "voltar", as mudanças são perdidas.

Se você deseja que as alterações persistam, devemos gravá-las de volta para o servidor.

#### 11.1 - Adicionando o botão de salvar

Então vamos até o aquivo `src/app/detalhe-aluno/detalhe-aluno.component.html`, e no final adicione um botão de salvar com um link de evento de clique que invoca um novo método do `DetalheAlunoComponent`  chamado `salvar()`:

```html
<div *ngIf="aluno">
  <h2>{{ aluno.nome | uppercase }} </h2> 
  <div><span>id: </span>{{ aluno.id }}</div>
  <div>
  <span>nome: </span>
  	   <input [(ngModel)]="aluno.nome" placeholder="nome">
  </div>
</div>

<button (click)="goBack()">Voltar</button>
<button (click)="salvar()">Salvar</button><!-- Botão Salvar -->

```
#### 11.2 - Adicionando a o método Salvar em DetalheAlunoComponent

Abra o aquivo `src/app/detalhe-aluno/detalhe-aluno.component.ts`, e adicione o seguinte método, `salvar()`, que persiste nas alterações do nome do aluno usando o método `atualizarAluno()` (que Vamos Criar :raised_hand:) de `AlunoService` e, em seguida, regressa à página anterior.

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
  	this.location.back();
  }

  salvar(): void {
    this.alunoService.atualizarAluno(this.aluno)
    .subscribe(() => this.goBack());
  } // Método que passará o os dados do aluno a ser atualizado para o AlunoService

}
```
Provavelmente sua aplicação deu :shit: pela falta do método `AlunoService.atualizarAluno()`, mas não se preocupe vá ao próximo passo para resolver isso :wink:

#### 11.3 - Adicionando o método atualizarAluno em AlunoService


Abra o aquivo `src/app/aluno.service.ts`, e vamos cria o método `atualizarAluno()`, a estrutura geral do método `atualizarAluno()` é semelhante à do `getAluno()`, mas usa `http.put()` para persistir o aluno alterado no servidor:

````ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';//Importe o catchError de rxjs/operators

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`;

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), 
      catchError(this.handleError<Aluno>(`Erro ao carregar aluno id=${id}`))
     ); 
  }

  atualizarAluno(aluno: Aluno): Observable<any> {

    const url = `${this.alunosUrl}/${aluno.id}`; //Url para atualizar o aluno
    
    return this.http.put(url, aluno, httpOptions).pipe( // Envia os dados para o servidor via method PUT
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),// Atualiza o tap com uma mensagem no log
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))// Captura algun possível erro
    );
  }

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}
````
O método `HttpClient.put()` leva três parâmetros:

- A URL
- Os dados a serem atualizados (o Aluno modificado neste caso)
- opções

O URL está alterado. A API Laravel dos alunos sabe qual açimp para atualizar, observando o seu `id`.

A API da Web espera um cabeçalho especial (` 'Content-Type': 'application/json'`) em solicitações de salvamento de HTTP. Esse cabeçalho está na constante `httpOption` definida no `AlunoService`.

#### 12 - Adicionando um novo Aluno

Agora que já estamos listando e editando um aluno vamos inserir novos alunos na nossa base :grin:

#### 12.1 - Ajustando o form para salvar um novo aluno

Para adicionar um aluno, este aplicativo só precisa do nome dele. Vamos usar um elemento `input` emparelhado com um botão de adicionar.

Abra o arquivo `src/app/aluno/aluno.component.html`, e faça as seguintes modificações:

```html
<hr>
<div>
  <label>Nome do Aluno:
    <input #alunoNome />
  </label>
 
  <button (click)="adicionar(alunoNome.value); alunoNome.value=''">
    adicionar
  </button> <!-- (click) passa o valor do input alunoNome para funão adicionar() -->
</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos">
  	<a routerLink="/aluno/{{aluno.id}}">
    <span> {{ aluno.id }} </span> {{ aluno.nome }}
    </a>
  </li>
</ul>
<hr>
```

#### 12.2 - Adicionando o método adicionar() do envendo de click em AlunoComponent

Em resposta a um evento de clique, chame o nosso método manipulador de clique `adicionar` do componente e então deveremos limpar o campo de entrada para que este esteja pronto para outro nome, para isso abra o arquivo `src/app/aluno/aluno.component.ts` e faça as seguintes modifiações:

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
  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }

  adicionar(nome: string): void {
    nome = nome.trim(); //limpa os espaços em excesso do nome;
    if(!nome) {return ;} //caso o nome não tenha sido informado não faz nada!
    this.alunoService.adicionarAluno({nome} as Aluno) //Chama a o método AlunoService.adicionarAluno passando o novo nome sumulando uma instância de Aluno
    .subscribe(aluno => {
      this.alunos.push(aluno);//Atualiza a lista de Aluno
    })

  }//Método que chama o service de aluno para salvar o novo
}
```
Essa alteração vai dar :shit: na sua aplicação, pela falta do método `adicionarAluno()` em `AlunoService`, mas não se preocupe vamos resolver isso :wink: !

Nosso método fará que quando o nome dado não estiver em branco, o manipulador cria um objeto similar ao Aluno do nome (é apenas falta o id) e passa para o método `AlunoService.adicionarAluno()`.

Quando o `adicionarAluno()` salva com sucesso, o retorno de chamada de subscrição recebe o novo aluno e o coloca na lista de alunos para exibição.

#### 12.3 - Adicionando o método adicionarAluno em AlunoService

Abra o arquivo `src/app/aluno.service.ts`, e adicione o método `adicionarAluno` como abaixo:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`;

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), 
      catchError(this.handleError<Aluno>(`Erro ao carregar aluno id=${id}`))
     ); 
  }

  atualizarAluno(aluno: Aluno): Observable<any> {

    const url = `${this.alunosUrl}/${aluno.id}`;
    
    return this.http.put(url, aluno, httpOptions).pipe(
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))
    );
  }


  adicionarAluno(aluno: Aluno): Observable<Aluno> { 
    return this.http.post<Aluno>(this.alunosUrl, aluno,httpOptions)//HttpClient.post passa os dados Via method POST para a API
    .pipe(
      tap((aluno: Aluno) => this.log(`Aluno Adicionado com sucesso w/ id=${aluno.id}`)),// Adiciona a mensagem caso o aluno seja adicionado
      catchError(this.handleError<Aluno>('Erro ao Adicionar um aluno!'))// Mostra a mensagem caso ocorra algum erro
    );
  }//Metodo que recebe o aluno com o nome


  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}
```
Nosso `AlunoService.adicionarAluno()` é difere do `atualizarAluno` de duas maneiras.

- Ele chama `HttpClient.post()` em vez de `put()`.
- Ele espera que o servidor gere um id para o novo aluno, que ele retorna no `Observable<Aluno>`.


Atualize o navegador, tudo deve está funcionando até aqui! :v: 
Tente adicionar algum aluno;
Caso de algum erro mesmoas dicas de antes, reinicie o servidor, se não funcionar tente refazer os passos, se continuar me procure, só não desista :sunglasses:

#### 13 - Deletando um Aluno

Estamos quase acabando galera, só mais um pouco :sweat_smile:, vamos agora cria a funcinalidade de deletar um aluno

#### 13.1 - Adicionando o botão de remover aluno

Vamos agora adicionar o botão para remover um aluno na lista de alunos para isso abra o arquivo: `src/app/aluno/aluno.component.html`, e adicione o botão como no exemplo abaixo:

```html
<hr>
<div>
  <label>Nome do Aluno:
    <input #alunoNome />
  </label>
 
  <button (click)="adicionar(alunoNome.value); alunoNome.value=''">
    adicionar
  </button>
</div>
<hr>
<ul class="lista-alunos" >
  <li *ngFor="let aluno of alunos">
  	<a routerLink="/aluno/{{aluno.id}}">
    <span> {{ aluno.id }} </span> {{ aluno.nome }} 
    </a>
    <button title="Remover Aluno" (click)="delete(aluno)">Remover</button><!-- Botão para remover aluno -->
  </li>
</ul>
<hr>

```

Eu sei tá feio mas fique a vondate para modificar o CSS :see_no_evil:

#### 13.2 - Adicioncionado Método delete em AlunoComponent

Abra o arquivo `src/app/aluno/aluno.component.ts`, e adicione o método ouvinte do envento click do botão de remover:

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
  
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  getAlunos() :void {
    this.alunoService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if(!nome) {return ;} 
    this.alunoService.adicionarAluno({nome} as Aluno)
    .subscribe(aluno => {
      this.alunos.push(aluno);
    })
  }

  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(a => a !== aluno); // atualiza lista de alunos
    this.alunoService.deletarAluno(aluno).subscribe(); //chama o método deletarAluno de alunoService passando o aluno a ser deletado!
  }
}
```
Essa alteração vai dar :shit: na sua aplicação, pela falta do método `deletarAluno()` em `AlunoService`, mas não se preocupe vamos resolver isso :wink: !

#### 13.3 - Adicionando o método de deletarAluno em AlunoService

Abra o arquivo `src/app/aluno.service.ts`, e adicione o método para remover um aluno:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`;

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), 
      catchError(this.handleError<Aluno>(`Erro ao carregar aluno id=${id}`))
     ); 
  }

  atualizarAluno(aluno: Aluno): Observable<any> {

    const url = `${this.alunosUrl}/${aluno.id}`;
    
    return this.http.put(url, aluno, httpOptions).pipe(
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))
    );
  }


  adicionarAluno(aluno: Aluno): Observable<Aluno> { 
    return this.http.post<Aluno>(this.alunosUrl, aluno,httpOptions)
    .pipe(
      tap((aluno: Aluno) => this.log(`Aluno Adicionado com sucesso w/ id=${aluno.id}`)),
      catchError(this.handleError<Aluno>('Erro ao Adicionar um aluno!'))
    );
  }

  deletarAluno(aluno: Aluno):  Observable<any> {

      const id = typeof aluno === 'number' ? aluno : aluno.id;//Verifica se está recebeno um instancia de Aluno ou um id
      const url = `${this.alunosUrl}/${id}`; // Configura a url para apagar o aluno

      return this.http.delete(url,httpOptions)// HttpClient.delete passa os dados Via method DELETE para a API
      .pipe(
        tap(_=> this.log(`Aluno deletado com sucesso`)),//Adiciona uma mensagem caso o aluno seja deletado
        catchError(this.handleError<any>('Erro ao deletar Aluno'))//Adiciona uma mensagem caso dê algum erro
      );

  }//Método que recebe um aluno ou id para deletar
  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}
```

- Nosso método chama `HttpClient.delete`.
- A URL é o URL do aluno mais o id para deletar
- Não enviamos dados como fez com put e post.
- Mais ainda precisamos enviar o httpOptions.

Novamente se os passos anteriores não derem certo, reinicie o servidor, tente fazer-lo novamente me procure mas não desista!!


Atualize o navegador e experimente a nova funcionalidade de exclusão.:v:

## A cereja do bolo :cherries:


Agora que já temos nosso **CRUD** de aluno completo vamos fazer uma `input` de busca dos nossos alunos

#### 14 - Buscando aluno pelo nome

Neste último exercício, vamos aprender a encadear operadores `Observable` juntos para minimizar o número de solicitações HTTP semelhantes e consumir a largura de banda da rede economicamente.:v:

Vamos adicionar um recurso de pesquisa de aluno ao Dashboard. À medida que o usuário digita um nome em uma caixa de pesquisa, você fará solicitações HTTP repetidas para alunos filtrados por esse nome. Nosso objetivo é emitir apenas tantos pedidos quanto necessário.

#### 14.1 - Criando método de buscarAluno em AlunoService


Abra o arquivo `src/app/aluno.service.ts`, e adicione o método `buscarAluno()`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Aluno } from './aluno/aluno';
import { ALUNOS } from './aluno/mock-alunos'; 

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getAlunos(): Observable<Aluno[]> {
  	
  	return this.http.get<Aluno[]>(this.alunosUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`;

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), 
      catchError(this.handleError<Aluno>(`Erro ao carregar aluno id=${id}`))
     ); 
  }

  atualizarAluno(aluno: Aluno): Observable<any> {

    const url = `${this.alunosUrl}/${aluno.id}`;
    
    return this.http.put(url, aluno, httpOptions).pipe(
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))
    );
  }


  adicionarAluno(aluno: Aluno): Observable<Aluno> { 
    return this.http.post<Aluno>(this.alunosUrl, aluno,httpOptions)
    .pipe(
      tap((aluno: Aluno) => this.log(`Aluno Adicionado com sucesso w/ id=${aluno.id}`)),
      catchError(this.handleError<Aluno>('Erro ao Adicionar um aluno!'))
    );
  }

  deletarAluno(aluno: Aluno):  Observable<any> {

      const id = typeof aluno === 'number' ? aluno : aluno.id;
      const url = `${this.alunosUrl}/${id}`;

      return this.http.delete(url,httpOptions)
      .pipe(
        tap(_=> this.log(`Aluno deletado com sucesso`)),
        catchError(this.handleError<any>('Erro ao deletar Aluno'))
      );

  }

  buscarAluno(term: string): Observable<Aluno[]>{

    const url = `http://127.0.0.1:8000/api/buscar_aluno?busca=${term}`;//Configura a url para fazer a busca

    if(!term.trim()){//Verifica se a busca está vazia
      return of([]);//se estiver vazia retorna uma lista em branco
    }
    return this.http.get<Aluno[]>(url)//Envia a requisição via GET
    .pipe(
      tap(_=> this.log(`Alunos encontrados pelo termo "${term}"`)),//Insere uma mensagem caso a busca dê certo
      catchError(this.handleError<Aluno[]>('Erro ao encontrar aluno',[]))//Insere uma mensagem caso ocorra algum erro
    );
  }//Método para fazer a busca na nossa API

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}
```
### 14.2 - Adicionando nossa input de busca na Dashboard

Abra o arquivo `src/app/dashboard/dashboard.component.html`, vamos adicionar nosso seletor do compente de busca que iremos criar mais a frente:

```html
<h3>Alunos Recentes</h3>
<div style="padding: 10px 0; margin: 0;">
  <a *ngFor="let aluno of alunos" routerLink="/aluno/{{aluno.id}}">
    <div style="background-color: #607D8B; color: #fff; width: 24%; float: left; margin: 0.5%; text-align: center;">
      <h4>{{aluno.nome}}</h4>
    </div>
  </a>
</div>

<hr>
<app-aluno-busca></app-aluno-busca><!-- Adicione o seletor de AlunoBuscaComponent -->
<hr>
```
Provavelmente sua aplicação deu :shit: pela falta do component a qual o seletor `<app-aluno-busca>` pertence, mas não se preocupe vá ao próximo passo para resolver isso :wink:


#### 15 - Criando AlunoBuscaComponent

Vamos criar nosso novo componente usando o Angular CLI, então use o comando:

```sh
ng generate component aluno-busca
```
Isso irá criar os seguintes Arquivos:

- src/app/aluno-busca/aluno-busca.component.css
- src/app/aluno-busca/aluno-busca.component.html
- src/app/aluno-busca/aluno-busca.component.spec.ts
- src/app/aluno-busca/aluno-busca.component.ts

Modificar o arquivo `src/app/app.module.ts` adicionando `AlunoBuscaComponente` em seu *array* de `declarations`, 
Obs.: No meu deu `AppModule`, deu um bug na hora de atualizar o arquivo, para confirmar dê uma olhada de ele está de acordo com exemplo baixo:

```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  import { AlunoService } from './aluno.service';
  import { MessageService } from './message.service';
  import { MessagesComponent } from './messages/messages.component';
  import { AppRoutingModule } from './/app-routing.module';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { AlunoBuscaComponent } from './aluno-busca/aluno-busca.component';// Faça a importação automática do componente criado!

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent,
      MessagesComponent,
      DashboardComponent,
      AlunoBuscaComponent// Adição automática do componente criado!
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [ AlunoService, MessageService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

#### 16 - Modificando o template de AlunoBuscaComponent

Abra o arquivo `src/app/aluno-busca/aluno-busca.component.html` e faça as seguintes modificações:

```html
<div>
  <h4>Buscar Aluno</h4>
  <input #caixaBusca id="search-box" (keyup)="buscar(caixaBusca.value)" />
  <ul>
    <li *ngFor="let aluno of alunos$ | async">
      <a routerLink="/aluno/{{aluno.id}}">
        {{aluno.nome}}
      </a>
    </li>
  </ul>
</div>
```
Melhore estilos CSS se possível que eu sei que tá feio :see_no_evil:.

À medida que o usuário digita na caixa de pesquisa, um link de evento de chama o método de `buscar` do componente com o novo valor da caixa de pesquisa.

#### 17 - Entendendo AsyncPipe

Como esperado, o `*ngFor` repete objetos alunos.

Olhe atentamente no código do passo anterior e você verá que o `*ngFor` itera sobre uma lista chamada `alunos$`, e não `aluno`.

O `$` é uma convenção que indica `alunos$` é um `Observable`, não um *array*.

O `*ngFor` não pode fazer nada com um `Observable`. Mas também há um caractere de *pipe* (`|`) seguido de [`async`](https://angular.io/api/core/testing/async), que identifica o [`AsyncPipe`](https://angular.io/api/common/AsyncPipe) Angular.

O  [`AsyncPipe`](https://angular.io/api/common/AsyncPipe) se inscreve em um `Observable` automaticamente, então você não terá que fazê-lo na classe de componente. :wink:

#### 18 - Ajustando o AlunoBuscaComponent

Vamos agora ajustar nosso `AlunoBuscaComponent`, para ele chamar a função de busca abra o arquivo `src/app/aluno-busca/aluno-busca.component.ts`, e faça as seguintes implementações:

```ts
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Aluno } from '../aluno/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-busca',
  templateUrl: './aluno-busca.component.html',
  styleUrls: [ './aluno-busca.component.css' ]
})
export class AlunoBuscaComponent implements OnInit {

  alunos$: Observable<Aluno[]>; //Note a declaração dos alunos$ $ como um Observable

  private termBusca = new Subject<string>();

  constructor(private alunoService: AlunoService) {}

  // passe o termo de pesquisa para o fluxo observável.
  buscar(term: string): void {
    this.termBusca.next(term);
  }

  ngOnInit(): void {
    this.alunos$ = this.termBusca.pipe(
      // Aguarde 300 ms após cada pressionamento de tecla antes de considerar o termo
      debounceTime(300),

      // ignore um novo termo se for o mesmo que o termo anterior
      distinctUntilChanged(),

      // mudar para nova pesquisa observável cada vez que o termo mudar
      switchMap((term: string) => this.alunoService.buscarAluno(term)),
    );
  }
}
```
Um `Subject` é tanto uma fonte de valores observáveis quanto um `Observable` em si. Você pode se inscrever para um  `Subject` como você faria com qualquer `Observable`.

Você também pode enviar valores para esse `Observable` chamando o método `next(valor)` conforme o método `buscar()`.

O método de `buscar()` é chamado através de um evento vinculativo para o evento de `keystroke` do `input` `#caixaBusca`.

Toda vez que o usuário digita na `#caixaBusca`, é chamado o método `buscar()` com o valor da caixa de texto, um "`termBusca`". O `termBusca` torna-se um `Observable` que emite um fluxo constante de termos de pesquisa.



#### 19 - Entendendo o encadeamento de operadores RxJS

Quando passamos um novo termo de pesquisa diretamente para o `AlunoService.buscarAluno` depois de cada vez que o usuário tecla algo criaria uma quantidade excessiva de solicitações HTTP, taxando recursos do servidor e queimando até mesmo o seu plano de dados da rede celular :cold_sweat:.

Em vez disso, o método `ngOnInit()` canaliza os registros de pesquisa observáveis através de uma sequência de operadores da biblioteca **RxJS** que reduzem o número de chamadas para o `AlunoService.buscarAluno`, em última análise, retornando um resultado de pesquisa de alunos oportuno (cada `aluno[]`).

Então quando ele chama o método `ngOnInit()` ele executa `this.alunos$ = this.termBusca.pipe()` com aluns parâmetros:

- `debounceTime(300)`  -  Aguarda até que o fluxo de novos eventos de `string` pare durante 300 milissegundos antes de passar ao longo da última `string`. Você nunca fará solicitações com mais freqüência do que 300ms.
- `distinctUntilChanged()` - Garante que uma solicitação seja enviada somente se o texto do filtro for alterado.
- `switchMap()` - Chama o serviço de pesquisa para cada termo de pesquisa que o faça através de `debounce` e `distinctUntilChanged`. Ele cancela e descarta observáveis de pesquisa anteriores, retornando apenas o serviço de pesquisa mais recente.



#### 20 - Teste nossa aplicação

Agora deve estár tudo funcionado, teste a aplicação, insira, remova, edit  alunos, alem de usar a nossa caixa de busca

#### 21  Sinta-se a vontade para melhorar esse CSS :wink:


#### Até a próxima ~~aula!~~ :sweat_smile: Ops. Acabou as aulas :cry::cry::cry::cry::cry::cry::sob::sob::sob::sob:



## [Atividade prática Final](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-13/Atividade)

## Depois da atividade pode comemorar \o/ que....
#### Aaaaaaacaaaaaaaaaaaaaaaaaboooooooooooouuuuu!!!!!! Aaaaaacaaaabooouuuu!!!!:tada: :confetti_ball: :balloon: 
![Teetraaaa](https://media1.tenor.com/images/ee399a63578b6549f921f2ebbf46b89f/tenor.gif)

![happy](https://media1.tenor.com/images/1f84b096cbe1cc9f3763c803bb17e10e/tenor.gif?itemid=5878976)

![ahhhh](https://i.giphy.com/media/61KXXDgl7rZPW/giphy.webp)

![Alt emo](https://vignette.wikia.nocookie.net/universosteven/images/7/78/Emocionado.gif/revision/latest?cb=20161106031819&path-prefix=es)



# Referências - para saber mais...
 - https://angular.io/

##### Agora  que já sabemos a base do Angular podemos melhorar nossos aplicativos usando ferramentas como https://material.angular.io/, para melhorar a aparência do nosso app, além de poder usar o https://ionicframework.com/ para criar app hibridos. aproveite as férias e não deixe de estudar :wink:


![tchau](https://media1.tenor.com/images/7f5bf5b3fc80e359d25f1125af98b1ce/tenor.gif?itemid=4577090)



[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)
