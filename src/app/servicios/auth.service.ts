import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase  from 'firebase/app';
import { resolve, reject } from 'q';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //salir de la cuenta
  logout(){
    return this.afAuth.auth.signOut();
  }

  //Loguearse en la cuenta
  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
    
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

//funcion que obtiene los datos del usuario logueado
getAuth(){
    return this.afAuth.authState.map (auth  => auth );
  }

}
