import { Injectable } from '@angular/core';
//Servicio en la nube de autentificacion de FireBase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../../shared/service/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Referenciar Auth de FireBase al servicio

  constructor(
    public auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }

  //Funcion de registro
  registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  //Funcion para inicio de sesion
  InicioSesion(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)

  }
  //Funcion para cerrar sesion
  CerrarSesion() {
    //Devuelve una promesa vacia -> quita token
    return this.auth.signOut()
  }


  //Funcion para tomar el UID

  async ObtenerUid() {
    //nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser

    //Si el usuario no respeta la estructura de la interfaz/
    //Si tuvo problemas para el registro -> ej:mal internet
    if (user == null) {
      return null
    } else {
      return user.uid
    }
  }


  obtenerUsuario(email: string) {
    /**
     * retornamos del servicio firestore la coleccion de 'usuarios', buscamos la referencia en los email registrados y 
     * los comparamos con los que ingrese el usuario al iniciar sesion y lo obtiene con el '.get()'
     * Lo vuelve una promesa => da un resultado RESUELTO o RECHAZADO
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise()
  }
}
