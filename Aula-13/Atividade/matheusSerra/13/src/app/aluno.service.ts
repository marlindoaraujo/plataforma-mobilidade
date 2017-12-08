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
	};

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

  atualizarAluno(aluno: Aluno): Observable<any> {

    const url = `${this.alunosUrl}/${aluno.id}`; //Url para atualizar o aluno
    
    return this.http.put(url, aluno, httpOptions).pipe( // Envia os dados para o servidor via method PUT
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),// Atualiza o tap com uma mensagem no log
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))// Captura algun possível erro
    );
  }

  adicionarAluno(aluno: Aluno): Observable<Aluno> { 
    return this.http.post<Aluno>(this.alunosUrl, aluno,httpOptions)//HttpClient.post passa os dados Via method POST para a API
    .pipe(
      tap((aluno: Aluno) => this.log(`Aluno Adicionado com sucesso w/ id=${aluno.id}`)),// Adiciona a mensagem caso o aluno seja adicionado
      catchError(this.handleError<Aluno>('Erro ao Adicionar um aluno!'))// Mostra a mensagem caso ocorra algum erro
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
  }
  
  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }
}