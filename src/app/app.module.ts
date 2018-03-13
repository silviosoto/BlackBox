import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';
import { DasboardComponent } from './compoenentes/dasboard/dasboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    NotfoundpageComponent,
    DasboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
