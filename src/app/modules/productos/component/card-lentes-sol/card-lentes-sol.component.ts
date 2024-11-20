import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
@Component({
  selector: 'app-card-lentes-sol',
  templateUrl: './card-lentes-sol.component.html',
  styleUrls: ['./card-lentes-sol.component.css']
})
export class CardLentesSolComponent {


//coleccion de todos los productos de forma local
coleccionProductos: Producto[] = []
//coleccion de productos de una sola categoria
coleccionLentesSol: Producto[] = []

//variable para seleccionar productos especificos
productoSeleccionado!: Producto

//variable para manejar el estado del modal
modalVisible:boolean=false

//patentamos de forma local el servicio para acceder en el
constructor(public servicioCrud: CrudService) { }

//inicializa al momento que renderiza el conponente
ngOnInit(): void {

  //accedemos a metodo "obtenerProducto" y nos subscribimos a los cambios
  //recibimos notificacion ante modificaciones
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto

    //mostrara la coleccion de esa categoria hasta el momentos
    this.mostrarProductoLentesSol()
  })


}

mostrarProductoLentesSol(){
  this.coleccionProductos.forEach(producto => {
    if (producto.categoria === "lentesdesol") {
      this.coleccionLentesSol.push(producto)



    }
  })
}


mostrarVer(info:Producto){
  this.modalVisible=true
  this.productoSeleccionado=info
}



stock: number = 0;

}
