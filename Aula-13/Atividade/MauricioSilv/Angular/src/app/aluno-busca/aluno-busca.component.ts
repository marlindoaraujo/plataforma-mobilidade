import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Professor } from '../professor/professor';
import { ProfessorService } from '../professor.service';


@Component({
  selector: 'app-aluno-busca',
  templateUrl: './aluno-busca.component.html',
  styleUrls: ['./aluno-busca.component.css']
})
export class AlunoBuscaComponent implements OnInit {

	alunos$: Observable<Professor[]>;

	private termBusca = new Subject<string>();

  constructor(private professorService: ProfessorService) { }

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
      switchMap((term: string) => this.professorService.buscarAluno(term)),
    );
  }

}
