import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent}  from './componentes/login/login.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import {NavComponent} from './componentes/nav/nav.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
