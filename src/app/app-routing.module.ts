import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent}  from './componentes/login/login.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import {NavComponent} from './componentes/nav/nav.component';
import { GestionUsuarioComponent } from './componentes/gestion-usuario/gestion-usuario.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'GestionUsuario', component: GestionUsuarioComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
