import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheGameComponent } from './detalhe-game/detalhe-game.component';

const routes: Routes = [
	{ path: 'jogos', component: GameComponent },
	{ path: 'jogo/:id', component: DetalheGameComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
