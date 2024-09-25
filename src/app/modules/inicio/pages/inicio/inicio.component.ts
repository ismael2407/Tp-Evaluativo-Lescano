import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {




//coleccion de todos los productos de forma local
coleccionProductos: Producto[] = []
//coleccion de productos de una sola categoria
coleccionOfertas: Producto[] = []

//variable para seleccionar productos especificos
productoSeleccionado!: Producto

//variable para manejar el estado del modal
modalVisible:boolean=false

//patentamos de forma local el servicio para acceder en el
constructor(public servicioCrud: CrudService) { }



productoPrecioOferta:number=0

variabletemporal:number=0

//inicializa al momento que renderiza el conponente
ngOnInit(): void {

  //accedemos a metodo "obtenerProducto" y nos subscribimos a los cambios
  //recibimos notificacion ante modificaciones
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto

    //mostrara la coleccion de esa categoria hasta el momentos
    this.mostrarProductoOfertas()
  })


}

mostrarProductoOfertas(){
  this.coleccionProductos.forEach(producto => {
    if (producto.categoria === "ofertas") {
      this.productoPrecioOferta=(producto.precio * producto.descuento) / 100
      this.variabletemporal=producto.precio-this.productoPrecioOferta
      this.coleccionOfertas.push(producto)
      
console.log(this.variabletemporal)


    }
  })

}


mostrarVer(info:Producto){
  this.modalVisible=true
  this.productoSeleccionado=info
}

  
}
