import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';

import {environment} from '../environments/environment'
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'; 
import {AuthService} from './servicios/auth.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import { GestionUsuarioComponent } from './componentes/gestion-usuario/gestion-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    NotfoundpageComponent,
    DashboardComponent,
    GestionUsuarioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
  