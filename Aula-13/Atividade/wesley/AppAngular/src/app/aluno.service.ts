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
  		tap(heroes => this.log(`Carregando professores`)),
  		catchError(this.handleError('GetAlunos',[]))
  	);
  }

  getAluno(id: number):  Observable<Aluno> {

    const url = `${this.alunosUrl}/${id}/edit`;

    return this.http.get<Aluno>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), 
      catchError(this.handleError<Aluno>(`Erro ao carregar professor id=${id}`))
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
      tap((aluno: Aluno) => this.log(`Professor Adicionado com sucesso w/ id=${aluno.id}`)),
      catchError(this.handleError<Aluno>('Erro ao Adicionar um professor!'))
    );
  }

  deletarAluno(aluno: Aluno):  Observable<any> {

      const id = typeof aluno === 'number' ? aluno : aluno.id;
      const url = `${this.alunosUrl}/${id}`;

      return this.http.delete(url,httpOptions)
      .pipe(
        tap(_=> this.log(`Professor deletado com sucesso`)),
        catchError(this.handleError<any>('Erro ao deletar Professor'))
      );

  }

  buscarAluno(term: string): Observable<Aluno[]>{

    const url = `http://127.0.0.1:8000/api/buscar_aluno?busca=${term}`;//Configura a url para fazer a busca

    if(!term.trim()){//Verifica se a busca está vazia
      return of([]);//se estiver vazia retorna uma lista em branco
    }
    return this.http.get<Aluno[]>(url)//Envia a requisição via GET
    .pipe(
      tap(_=> this.log(`Professores encontrados pelo termo "${term}"`)),//Insere uma mensagem caso a busca dê certo
      catchError(this.handleError<Aluno[]>('Erro ao encontrar Professor',[]))//Insere uma mensagem caso ocorra algum erro
    );
  }//Método para fazer a busca na nossa API

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}