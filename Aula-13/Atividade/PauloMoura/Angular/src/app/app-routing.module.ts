import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';
const routes: Routes = [ // crie uma constante com um array de objetos do tipo rota
  { path: 'professores', component: ProfessorComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'professor/:id', component: DetalheProfessorComponent },
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' } /* indique que quando acessar localhost:4200/alunos 
  ele chamará Alunocomponent */
];
@NgModule({
   
	 exports: [ RouterModule  ],
	 imports: [ RouterModule.forRoot(routes) ],



})
export class AppRoutingModule { }
