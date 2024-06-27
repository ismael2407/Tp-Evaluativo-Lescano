import { Injectable } from '@angular/core';
//cloud firestore --> Accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { catchError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  /*Definimos la coleccion de usuarios para que no sea accesible en toda la aplicacion.
   Lo definimos como una colecion de FireStore que respete la estructura de nuestra interfaz "Usuario"
  
  */

  private usuariosCollection: AngularFirestoreCollection<Usuario>
  /***
   * usuariosCollectio va a definir la nueva coleccion "usuarios" que estara en nuestra base de datos
   */


  constructor(private database: AngularFirestore) {
    this.usuariosCollection = database.collection<Usuario>("usuarios")
  }
  agregarUsuario(usuario: Usuario, id: string) {
    /**
     * creamos una nueva promesa junto los metodos:
     * Resolve: promesa resuelta -> funciona correctamente
     * Reject: promesa rechazada -> ocurrio una falla
     */


    return new Promise(async (resolve, reject) => {

      //Bloque TRY encapsula la logica suelta

      try {
        usuario.uid = id

        /**
         * Const resultado= coleccion de usuarios, envia como numero de documento el uid
         * y setea la informacion que ingresamos en el fomrulario de registro
         */
        const resultado = await this.usuariosCollection.doc(id).set(usuario) 

        resolve(resultado)

       
      }
      catch(error){
        reject(error)
      }
}


)


  }
}
