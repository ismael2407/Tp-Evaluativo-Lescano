import { Component } from '@angular/core';
import { CrudService } from '../../admin/service/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {





  constructor(public crudService: CrudService) { }
  /**
   *  El constructor recibe un servicio llamado crudService de tipo CrudService y lo hace público,
   *  lo que permite que se pueda acceder a él desde el componente.
   */


  displayedColumns: string[] = ['imagen','nombre', 'cantidad', 'preciounitario', 'eliminar']
  /**
   * 
   *  Esta línea define las columnas que se van a mostrar en una tabla
   */



  actualizarSubtotal(item: any) {
    this.crudService.AgregarAlCarrito(item)

  }
  /**
   * Esta función recibe un item como parámetro
   *  y llama al método AgregarAlCarrito del servicio crudService, pasando el item recibido.
   */




  eliminarItem(item: any) {
    this.crudService.eliminarItem(item);
    this.crudService.coleccionCarrito = [...this.crudService.coleccionCarrito]
  }

/**
 * Esta función también recibe un item como parámetro y llama al método eliminarItem del servicio crudService para eliminar el item.
 *  Luego, actualiza la colección del carrito (coleccionCarrito) creando una copia de la misma
 */



  realizarCompra() {
    Swal.fire({
      title: "Buen trabajo!",
      text: "¡Se pudo realizar la compra con exito!",
      icon: "success"
    });
  }

/**
 * Esta función llama a Swal.fire para mostrar una alerta con el mensaje
 *  "Buen trabajo! Se pudo realizar la compra con éxito!!" y un icono de éxito.
 */






incrementarCantidad(item: any) {
  item.cantidad++;
  this.actualizarSubtotal(item);
}

decrementarCantidad(item: any) {
  if (item.cantidad > 1) {
    item.cantidad--;
    this.actualizarSubtotal(item);
  }
}

}
