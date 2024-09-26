import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
@Component({
  selector: 'app-card-gafas',
  templateUrl: './card-gafas.component.html',
  styleUrls: ['./card-gafas.component.css']
})
export class CardGafasComponent {


  carrito: { producto: Producto, cantidad: number }[] = []; // Carrito de compras  


//coleccion de todos los productos de forma local
  coleccionProductos: Producto[] = []
  //coleccion de productos de una sola categoria
  coleccionGafas: Producto[] = []

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
      this.mostrarProductoGafas()
    })

 
  }

  mostrarProductoGafas(){
    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "gafas") {
        this.coleccionGafas.push(producto)



      }
    })
  }


  mostrarVer(info:Producto){
    this.modalVisible=true
    this.productoSeleccionado=info
  }

  agregarAlCarrito(producto: Producto) {  
    const index = this.carrito.findIndex(item => item.producto.idProducto === producto.idProducto);  
    if (index === -1) {  
      this.carrito.push({ producto, cantidad: 1 });  
    } else {  
      this.carrito[index].cantidad++;  
    }  
  }  


  


}
