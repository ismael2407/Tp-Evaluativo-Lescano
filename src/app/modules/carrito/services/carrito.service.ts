import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //Creamos el modelo que va a recibir los datos del pedido que se subira a la base de datos
  pedido: Pedido = {
    idPedido: '',
    producto: {
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: '',
      alt: '',
      stock: 0,
      modelo: '',
      marca: '',
      material: '',
      descuento: 0,
      idProducto: ''
    },
    cantidad: 0,
    total: 0

  }


  private pedidosColeccion: AngularFirestoreCollection<Pedido>

  private uid: string | null = null;
  constructor(
    private servicioAuth: AuthService,
    private servicioFirestore: AngularFirestore,
    public servicioRutas: Router
  ) {

    //creamos la subcoleccion dentro de la coleccion de usuarios y le damos ese valor a pedidosColeccion
    this.pedidosColeccion = servicioFirestore.collection(`usuarios/${this.uid}/pedido`);
  }


  //Inicializa el carrito y la subcoleccion de pedidos
  iniciarCarrito() {
    this.servicioAuth.ObtenerUid().then(uid => {
      this.uid = uid
      if (this.uid === null) {
        console.error(" No se obtuvo el UID. Intente iniciar sesion")


      } else {
        this.pedidosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
      }
    })
  }


  //Obtiene los prouctos que ya esten dentro del pedido
  obtenerCarrito() {
    return this.pedidosColeccion.snapshotChanges().pipe(map(action =>
      action.map(a => a.payload.doc.data())))
  }


  crearPedido(producto: Producto, stock: number) {
    try {
      const idPedido = this.servicioFirestore.createId()

      this.pedido.idPedido = idPedido;
      this.pedido.producto = producto;
      this.pedido.cantidad = stock;
      this.pedido.total = producto.precio * stock;


      this.pedidosColeccion.doc(idPedido).set(this.pedido);
    } catch (error) {
      Swal.fire({
        title:'¡Oh no!',
        text:'Ha ocurrido un error al subir su porducto n/'+error,
        icon:'error'
      });
    }
  }



  borrarPedido(pedido:Pedido){
    try {
      this.pedidosColeccion.doc(pedido.idPedido).delete()



      Swal.fire({
        title:`${pedido.producto.nombre} ha sido borrado`,
        text:'Ha borrado su producto con exito',
        icon:'info'
      })
    } catch (error) {
      Swal.fire({
        title:'¡Oh no!',
        text:'Ha ocurrido un error: \n'+error,
        icon:'error',
      })
    }
  }

}
