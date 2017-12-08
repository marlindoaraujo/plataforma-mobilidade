import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ProfessorComponent } from './professor/professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';

const routes: Routes = [
	{ path: 'professores', component: ProfessorComponent },
	{ path: 'professor/:id', component: DetalheProfessorComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
