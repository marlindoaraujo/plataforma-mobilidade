import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component'; //importa o  DetalheAlunoComponent 

const routes: Routes = [
	{ path: 'alunos', component: AlunoComponent },
	{ path: 'aluno/:id', component: AlunoComponent }, /* Difine a rota os :id 
	indica que esse será um parâmentro a ser passado similar aos paramentros na 
	roda do laravel aluno/{id}*/
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }