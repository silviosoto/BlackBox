import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent}  from './componentes/login/login.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
