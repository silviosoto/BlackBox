import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.scss']
})
export class GestionUsuarioComponent implements OnInit {
    
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    $('.button-collapse').sideNav();

    $('.collapsible').collapsible();
    
    $('select').material_select(); 

    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }
  onClickLogout() {
    this.authService.logout();
  }

}
