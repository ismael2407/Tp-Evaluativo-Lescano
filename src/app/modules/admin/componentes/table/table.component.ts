import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
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

  nombreImagen!: string //Obtendra el nombre de la imagen
  imagen!: string //Obtendra la ruta de la imagen 



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
    descuento: new FormControl(0),
    //imagen: new FormControl('', Validators.required),
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
        descuento: this.producto.value.descuento!,
        modelo: this.producto.value.modelo!,
        marca: this.producto.value.marca!,
        material: this.producto.value.material!,
        imagen: '',
        alt: this.producto.value.alt!
      }

      //enviamos nombre y url de la imagen, definimos carpeta de las imagenes como "producto"
      await this.servicioCrud.subirImagenes(this.nombreImagen, this.imagen, "productos")
        .then(resp => {

          //encapsulamos la respuesta y enviamos la informacion obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {

              //Ahora metodo crearProducto recibe datos del formnulario y URL creada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {

                  Swal.fire({
                    title: "¡Bien Hecho!",
                    text: "¡Ha ingresado un nuevo producto con exito!",
                    icon: "success"
                  })


                  //resetea el formulario y las casillas quedan vacias
                  this.producto.reset()
                })
                .catch(error => {

                  Swal.fire({
                    title: "Oh no",
                    text: "Ha ocurrido un error al agregar un nuevo producto:\n" + error,
                    icon: "error"
                  })


                  this.producto.reset()
                })
            })
        })



    }
  }

  //CARGAR IMAGENES

  cargarImagen(event: any) {

    //Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0]

    //variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader()

    if (archivo != undefined) {
      /*Llamamos a metodo readAsDataURl para leer toda la informacion recibida
      Enviamos como parametro al "archivo" oiruqe sera el encargado de tener la
      info ingresada por el usuario
      */
      reader.readAsDataURL(archivo)

      //Definimos que haremos con la informacion mediante funcion flecha
      reader.onloadend = () => {

        let url = reader.result



        if (url != null) {
          //Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name
          //Definimos ruta de la imagen segun url recibida
          this.imagen = url.toString()
        }
      }
    }
  }

  //funcion vinvulada al modal y al boton de la tabla
  mostrarborrarProducto(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true

    this.productoSeleccionado = productoSeleccionado
  }


  borrarProducto() {

    /*
     ahora debemos enviar tanto el ID del producto (para identificarlo en firestore)
     y la URL de su imagen (para identificarlo en Storage)
     ID y URL <- identificadores propios de cada archivo en la Base de Datos
     */

    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
      .then(respuesta => {

        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡Se ha podido eliminar el producto  con exito!",
          icon: "success"
        })


      })
      .catch(error => {
        Swal.fire({
          title: "¡Oh no!",
          text: "¡Ha ocurrido un error al eliminar el producto:\n!" + error,
          icon: "error"
        })



      })
  }


  //EDITAR PRODUCTOS
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado
    /**
     * Toma los valores del producto seleccionado y los va a 
     * autocompletar en el formulario del modal 
     * (menos el ID y la URL de la imagen)
     * 
     */
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      modelo: productoSeleccionado.modelo,
      marca: productoSeleccionado.marca,
      material: productoSeleccionado.material,
      descuento: productoSeleccionado.descuento,
      alt: productoSeleccionado.alt

    })
  }

  //VINCULA AL BOTON "editarProducto" del modal de editar
  editarProducto() {
    //Solo idProducto no se modifica por el usuario
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      //Los demas atributos reciben nueva informacion desde el formulario
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      descuento:this.producto.value.descuento!,
      modelo: this.producto.value.modelo!,
      marca: this.producto.value.marca!,
      material: this.producto.value.material!,
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!
    }

    //Verificamos si el usuario ingresa o no una nueva imagen
    if (this.imagen) {
      this.servicioCrud.subirImagenes(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              datos.imagen = url //Actualizamos URL de la imagen en los datos del formulario

              this.actualizarProducto(datos) //Actualizamos los datos

              this.producto.reset() //Vaciar las casillas del formulario
            })
            .catch(error => {
              alert("Hubo un error al subir la imagen: \n" + error)
              this.producto.reset()
            })
        })
    } else {
      /**
       * Actualizamos el formulario con los datos recibidos del usuario,
       *  pero sin modificar la imagen ya existente en Firestore y Store
       */
      this.actualizarProducto(datos)
    }








  }



  //ACTUALIZAR la informacion ya existente de los productos
  actualizarProducto(datos: Producto) {
    //Enviamos el metodo del id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {

        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡El producto se a modificado con exito!",
          icon: "success"
        })


        this.producto.reset()
      })
      .catch(error => {



        Swal.fire({
          title: "¡Oh no!",
          text: "¡Hubo un error al modificar el producto:\n" + error,
          icon: "success"
        })


        this.producto.reset()
      })
  }
}
