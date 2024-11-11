import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; 

//importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//importamos componentes de rutas de angular
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
import * as CryptoJS from "crypto-js"
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: "usuarios", //Todos los usuarios al registrarse seran visitantes
    password: "",
  }

  //creamos coleccion de usuario, tipo "Usuario" para arrays

  coleccionusuarios: Usuario[] = []






  constructor(
    public ServicioAuth: AuthService,
    public ServicioRutas: Router,
    public ServicioFirestore: FirestoreService
  ) {

  }

  //funcion para registro de nuevos usuarios
  async registrar() {


    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password

    }
    const respuesta = await this.ServicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo THEN es una promesa que devuelve el mismo valor si todo sale ok
      .then(respuesta => {
        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡Se pudo registrar con exito!",
          icon: "success"
        });

        //el metodo NAVIGATE nos redirecciona a otra vista
        this.ServicioRutas.navigate(['/inicio'])

      }
      )

      //El metodo CATCH captura una falla u la vuelve un error
      .catch(error => {
        Swal.fire({
          title: "¡Oh no!",
          text: "Hubo un error al registrar un nuevo usuario \n" + error,
          icon: "error"
        });
      })



    //Constante UID captura el identificador de la BD
    const uid = await this.ServicioAuth.ObtenerUid()
    //Se le asigna al atributo de ña interfaz esta constante
    this.usuarios.uid = uid
    //Llamamos a la funcion guardarUsuario()

    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString()

    this.guardarUsuario()
    //Llamamos a la funcion limpiarInputs()
    this.limpiarInputs()
  }

  //Funcion que accede a servicio Firestore y envia la informacion agrega junto al UID 
  async guardarUsuario() {
    this.ServicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios)
      })
      .catch(err => {
        console.log("Error=>", err)
      })

  }
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = 'visitante ',
      password: this.usuarios.password = ''
    }
  }
}
