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

  coleccionPreciosOfertas: number[] = []

  //variable para seleccionar productos especificos
  productoSeleccionado!: Producto

  //variable para manejar el estado del modal
  modalVisible: boolean = false

  //patentamos de forma local el servicio para acceder en el
  constructor(public servicioCrud: CrudService) { }



  productoPrecioOferta: number = 0

  precioFinal: number = 0

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
 
  mostrarProductoOfertas() {
    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "ofertas") {
        // Calcular el precio con descuento
        this.productoPrecioOferta = (producto.precio * producto.descuento) / 100;
        this.precioFinal = producto.precio - this.productoPrecioOferta;


        const productoConDescuento: Producto = {
          ...producto,    //Se utiliza el spread operator (...producto) para copiar todas las propiedades del objeto producto.
          precioFinal: this.precioFinal   //Luego, se agrega o actualiza la propiedad variabletemporal en la nueva copia con el mismo valor de this.variabletemporal.
        
        };
 
        // Agregar el producto con descuento a la colección de ofertas
        this.coleccionOfertas.push(productoConDescuento);
      }
    });
  }


  mostrarVer(info: Producto) {
    this.modalVisible = true
    this.productoSeleccionado = info
  }


}
