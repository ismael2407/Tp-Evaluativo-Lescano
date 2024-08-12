import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, ReplaySubject } from 'rxjs';



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
        reject(error)
      }

    })
  }
  //OBTENER productos
  obtenerProducto() {
    /**
     * snapshotChanges=>toma captura del estado de los datos
     * pipe=>tuberias que retornan un nuevo arreglo
     * map=>mapea o recorrre esa nueva informacion
     * a=> resguarda la nueva informacion y la envia con un documento
     */
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }


  //EDITAR porductos
  modificarProducto(idProducto: string, nuevaData: Producto) {
    //accedemos a la coleccion "productos" de la base de datos, buscamos el ID del
    //producto seleccionado y lo actualizamos con  el metodo "update" enviando la
    //nueva informacion
    return this.baseDatos.collection('productos').doc(idProducto).update(nuevaData)
  }

  //ELIMINAR productos
  eliminarProducto(idProducto: string) {
    return new Promise((resolve, reject) => {
      try {
        const respuesta = this.productosCollection.doc(idProducto).delete()
        resolve(respuesta)
      } catch (error) {
        reject(error)
      }
    })
  }
}
