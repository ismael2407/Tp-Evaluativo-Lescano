import { Component } from '@angular/core';
import { CrudService } from '../../admin/service/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {





constructor(public crudService : CrudService){} 

  displayedColumns:string[]=['nombre','cantidad','preciounitario','eliminar']

  actualizarSubtotal(item:any){
    this.crudService.AgregarAlCarrito(item)
    
  }
  
  eliminarItem(item:any){
    this.crudService.eliminarItem(item);
    this.crudService.coleccionCarrito =[...this.crudService.coleccionCarrito]
  }





  realizarCompra(){
    Swal.fire({
      title: "Buen trabajo!",
      text: "Se pudo realizar la compra con exito !!",
      icon: "success"
    }); 
  }



  
}
