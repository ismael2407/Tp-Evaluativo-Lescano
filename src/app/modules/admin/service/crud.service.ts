import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
//Importaciones para manejo de archivos y referencias
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage'
/**
 * getDownloadURL -> Para obtener la URL de descarga de una imagen subida
 * 
 * getStorage -> Para obtener la instancia de almacenamiento
 * 
 * ref -> Para crear referencias a ubicaciones en el almacenamiento
 * 
 * UploadResult -> Tipo que representa el resultado de una operacion subida
 * 
 * uploadString -> Para subir imagenes en formato de cadena
 * 
 * deleteObject -> Para eliminar un espacio en el almacenamiento  
 */

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Producto>



  private CarritoCollection:AngularFirestoreCollection<Producto>

  //Definir variable "respuesta" que podra subir resultados
  private respuesta!: UploadResult;

  //Inicializar servicio "Storage"
  private storage = getStorage();
  


  constructor(private baseDatos: AngularFirestore) {
    this.productosCollection = baseDatos.collection('producto')
    this.CarritoCollection=baseDatos.collection('producto')
  }


coleccionCarrito:any[]=[]

cantidadItemCarrito:number=0

totalCarrito:number=0


//Carrito

calcularTotal(){
  this.totalCarrito=0//Reinicia el total antes de calcular
  this.coleccionCarrito.forEach((element)=>{
    element.subTotal=element.precio*element.cantidadItemCarrito
    this.totalCarrito+=element.subTotal
  })
  this.totalCarrito=+this.totalCarrito.toFixed(2)//Redondear a dos decimales
}


//funcion para agregar o actualizar la cantidad de un producto

AgregarAlCarrito(item: any) { 
  const index = this.coleccionCarrito.findIndex(
    (element) => element.nombre === item.nombre
  );

  if (index !== -1) {
    // Si el producto ya existe en el carrito, actualiza la cantidad directamente
    this.coleccionCarrito[index].cantidad = item.cantidad;
    if (this.coleccionCarrito[index].cantidad <= 0) {
      this.eliminarItem(this.coleccionCarrito[index]); // Eliminar si la cantidad es 0 o menos
    }
  } else {
    // Si el producto no existe, agregar al carrito
    const nuevoElemento = {
      ...item,
      cantidad: item.cantidad > 0 ? item.cantidad : 1, // Asegurar que al menos tenga una cantidad positiva
    };
    this.coleccionCarrito.push(nuevoElemento);
  }

  this.cantidadItemCarrito = this.coleccionCarrito.length;
  this.calcularTotal();

  Swal.fire({
    title: "Buen Trabajo!",
    text: "se pudo agregar el producto al carrito!",
    icon: "success"
  });   
}

// Función para eliminar un producto del carrito
eliminarItem(item: any) {
  const index = this.coleccionCarrito.indexOf(item);
  if (index !== -1) {
    this.coleccionCarrito.splice(index, 1); // Eliminar el producto del array
  }
  this.cantidadItemCarrito = this.coleccionCarrito.length; // Actualizar la cantidad de items en el carrito
  this.calcularTotal(); // Recalcular el total después de eliminar
}


  //CREAR nuevos porductos

  crearProducto(producto: Producto, url: string) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo poara el producto en la base de datos
        const idProducto = this.baseDatos.createId()

        //asignamos ID creado al atributo idProducto de la interfaz Producto
        producto.idProducto = idProducto

        //Asignammos URL recibida del parametro al atributo "imagen" de interfaz Producto
        producto.imagen = url

        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        resolve(resultado)

      } catch (error) {
        reject(error)
      }

    })
  }
  //OBTENER productos
  obtenerProducto() {
    /**
     * snapshotChanges=>toma captura del estado de los datos
     * pipe=>tuberias que retornan un nuevo arreglo
     * map=>mapea o recorrre esa nueva informacion
     * a=> resguarda la nueva informacion y la envia con un documento
     */
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }


  //EDITAR porductos
  modificarProducto(idProducto: string, nuevaData: Producto) {
    //accedemos a la coleccion "productos" de la base de datos, buscamos el ID del
    //producto seleccionado y lo actualizamos con  el metodo "update" enviando la
    //nueva informacion
    return this.baseDatos.collection('producto').doc(idProducto).update(nuevaData)
  }

  //ELIMINAR productos
  eliminarProducto(idProducto: string, imagenUrl: string) {
    return new Promise((resolve, reject) => {
      try {
        //Definimos referencias localmente
        const storage = getStorage()
        //Obtiene la referencia desde el almacenamiento de Storage
        const referenciaImagen = ref(storage, imagenUrl);

        deleteObject(referenciaImagen)
          .then(() => {
            const respuesta = this.productosCollection.doc(idProducto).delete()
            resolve(respuesta)
          })
          .catch(error => {
            reject("Error al eliminar la imagen: \n" + error)
          })


      } catch (error) {
        reject(error)
      }
    })
  }


  //OBTENER url de imagenes
  obtenerUrlImagen(respuesta: UploadResult) {
    //Retorna URL obtenida como REFERENCIA
    return getDownloadURL(respuesta.ref)

  }


  /**
   * PARAMETROS OBTENIDOS
   * @param {string} nombre <- nombre de la imagen
   * @param {any} imagen <-tipo de imagenes que se pueden subir (extension)
   * @param {string} ruta <- ruta de almacenamiento de las imagenes
   * @returns <- se retorna lo obtenido
   * 
   */

  //SUBIR imagenes con sus referencias
  async subirImagenes(nombre: string, imagen: any, ruta: string) {
    try {

      //crear una referencia de imagen
      //Accede a Storage (almacenamiento), ruta (carpeta) / nombre (nombreImagen)
      let referenciaImagen = ref(this.storage, ruta + '/' + nombre)



      //asignarle a la respuesta la informacion de las imagenes subidas
      this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')

        .then(resp => {
          return resp;

        })

      return this.respuesta;



    }
    catch (error) {
      console.log(error)
      return this.respuesta
    }
  }
}
