import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideImageKitLoader } from '@angular/common';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos coleccion local de productos -> la definimos como array
  coleccionProductos: Producto[] = []

  productoSeleccionado!: Producto; // ! <- tomar valores vacios

  modalVisibleProducto: boolean = false;





  //definimos foromularios para los productos
  /**
   *atributos alfanumericos (string) se inicializan con comillas simples 
   * atributos numerios (number) se inicializan con cero ('0')
  
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    material: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),


  })
  constructor(public servicioCrud: CrudService) {

  }
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        modelo: this.producto.value.modelo!,
        marca: this.producto.value.marca!,
        material: this.producto.value.material!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha ingresado un nuevo producto con exito")
        })
        .catch(error => {
          alert("Ha ocurrido un error al agregar un nuevo producto")
        })
    }
  }

  

  //funcion vinvulada al modal y al boton de la tabla
  mostrarborrarProducto(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true

    this.productoSeleccionado = productoSeleccionado
  }


  borrarProducto() {
this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
.then(respuesta =>{
  alert("Se ha podido eliminar con exito")
})
.catch(error=>{
  alert("Ha ocurrido un error al eliminar el producto "+error)
})
  }

}
