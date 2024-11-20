import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import { Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  coleccionProductos: Producto[] = [];
  coleccionOfertas: Producto[] = [];
  chunkedOfertas: Producto[][] = [];
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;
  stock: number = 0;

  productoPrecioOferta: number = 0;
  precioFinal: number = 0;

  constructor(
    public servicioCrud: CrudService,
    public servicioCarrito: CarritoService
  ) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      this.mostrarProductoOfertas();
    });

    this.servicioCarrito.iniciarCarrito();
  }

  mostrarProductoOfertas() {
    this.coleccionOfertas = this.coleccionProductos.filter(producto => producto.categoria === "ofertas")
      .map(producto => {
        this.productoPrecioOferta = (producto.precio * producto.descuento) / 100;
        this.precioFinal = producto.precio - this.productoPrecioOferta;

        return { ...producto, precioFinal: this.precioFinal };
      });

    // Agrupar en subconjuntos de 4
    this.chunkedOfertas = this.chunkArray(this.coleccionOfertas, 4);
  }

  // Función para dividir el array en subconjuntos
  chunkArray(arr: Producto[], chunkSize: number): Producto[][] {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }

  @Input() productoReciente: string = '';
  @Output() productoAgregado = new EventEmitter<Producto>();

 



  mostrarVerCompra(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
    this.compraVisible = true;
  }

  

  compraVisible: boolean = false;
}
