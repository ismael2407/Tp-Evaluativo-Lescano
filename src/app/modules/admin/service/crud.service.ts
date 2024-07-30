import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';



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
  //EDITAR porductos
  //ELIMINAR productos
}
