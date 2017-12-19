import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Professor } from './professor/professor';
import { PROFESSOR } from './professor/mock-professor';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera


@Injectable()
export class ProfessorService {

	 private ProfessoresUrl = 'http://127.0.0.1:8000/api/aluno';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

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

  
  getProfessores(): Observable<Professor[]> {
  		
  		return this.http.get<Professor[]>(this.ProfessoresUrl)
  		.pipe(
  		tap(heroes => this.log(`Carregando alunos`)),
  		catchError(this.handleError('GetAlunos',[])) /* Agora, vamos dar um .pipe() no resultado e dar-lhe um operador catchError()
  		nao se precupe com o método *handleError já já vamos criar ele ;-) */
  	);


  	  }
  	   atualizarAluno(aluno: Professor): Observable<any> {

    const url = `${this.ProfessoresUrl}/${aluno.id}`; //Url para atualizar o aluno
    
    return this.http.put(url, aluno, httpOptions).pipe( // Envia os dados para o servidor via method PUT
      tap(_=> this.log(`Aluno Atualizado id=${aluno.id}`)),// Atualiza o tap com uma mensagem no log
      catchError(this.handleError<any>('Erroa ao atualizar Aluno'))// Captura algun possível erro
    );
  }
   getProfessor(id: number):  Observable<Professor> {
    const url = `${this.ProfessoresUrl}/${id}/edit`;
    return this.http.get<Professor>(url)
    .pipe(
      tap(_=> this.log(`Buscando aluno id=${id}`)), ////Adicione nosso tap
      catchError(this.handleError<Professor>(`Erro ao carregar aluno id=${id}`)) // Capitura os possíveis 
     ); 
 }
  adicionarAluno(aluno: Professor): Observable<Professor> { 
    return this.http.post<Professor>(this.ProfessoresUrl, aluno,httpOptions)//HttpClient.post passa os dados Via method POST para a API
    .pipe(
      tap((aluno: Professor) => this.log(`Aluno Adicionado com sucesso w/ id=${aluno.id}`)),// Adiciona a mensagem caso o aluno seja adicionado
      catchError(this.handleError<Professor>('Erro ao Adicionar um aluno!'))// Mostra a mensagem caso ocorra algum erro
    );
  }
   deletarAluno(aluno: Professor):  Observable<any> {

      const id = typeof aluno === 'number' ? aluno : aluno.id;//Verifica se está recebeno um instancia de Aluno ou um id
      const url = `${this.ProfessoresUrl}/${id}`; // Configura a url para apagar o aluno

      return this.http.delete(url,httpOptions)// HttpClient.delete passa os dados Via method DELETE para a API
      .pipe(
        tap(_=> this.log(`Aluno deletado com sucesso`)),//Adiciona uma mensagem caso o aluno seja deletado
        catchError(this.handleError<any>('Erro ao deletar Aluno'))//Adiciona uma mensagem caso dê algum erro
      );

  }//Método que recebe um aluno ou id para deletar

   buscarAluno(term: string): Observable<Professor[]>{

    const url = `http://127.0.0.1:8000/api/buscar_aluno?busca=${term}`;//Configura a url para fazer a busca

    if(!term.trim()){//Verifica se a busca está vazia
      return of([]);//se estiver vazia retorna uma lista em branco
    }
    return this.http.get<Professor[]>(url)//Envia a requisição via GET
    .pipe(
      tap(_=> this.log(`Professores encontrados pelo termo "${term}"`)),//Insere uma mensagem caso a busca dê certo
      catchError(this.handleError<Professor[]>('Erro ao encontrar professor',[]))//Insere uma mensagem caso ocorra algum erro
    );
  }//Método para fazer a busca na nossa API

 private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
 }
}