import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from "sweetalert2";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //String que modificara el valor de @Input en el componente hijo
  producto: string = ''


  //Coleccion que recibira los productos que se van agregando a la lista
  productosCarrusel: Producto[] = []




  productoAnadido(producto: Producto) {

    //Remplazamos el valor de producto
    this.producto = `${producto.nombre}:$${producto.precio}`






    try {

      /*Agregamos la informacion recibida 
            por el parametro de la funcion a la coleccion
            del carrusel*/
      this.productosCarrusel.push(producto)

      Swal.fire({
        title: '¡Eso Chaval!',
        text: 'Producto añadido al carrusel con exito',
        icon: 'info',

      })


    } catch (error) {



      Swal.fire({
        title: '¡Oh No!',
        text: 'Ha ocurrido un error\n'+error,
        icon: 'error',

      })
    }



  }

}
