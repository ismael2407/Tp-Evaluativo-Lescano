import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Producto>


  constructor(private baseDatos: AngularFirestore) {
    this.productosCollection = baseDatos.collection('producto')
  }


  //CREAR nuevos porductos

  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo poara el producto en la base de datos
        const idProducto = this.baseDatos.createId()
        //asignamos ID creado al atributo idProducto de la interfaz Producto
        producto.idProducto


        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        resolve(resultado)

      } catch (error) { 
        reject(error) }

    })
  }
  //OBTENER productos
obtenerProducto(){
  /**
   * sbapshotChanges=>toma captura del estado de los datos
   * pipe=>tuberias que retornan un nuevo arreglo
   * map=>mapea o recorrre esa nueva informacion
   * a=> resguarda la nueva informacion y la envia con un documento
   */
  return this.productosCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
}


  //EDITAR porductos
  //ELIMINAR productos
}
