import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicios de autentificacion
import { AuthService } from '../../services/auth.service';
//importamos servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
//importamos componentes de rutas de angular
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js"



@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  //propiedad del tipo array

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: "",
    password: "",
  }

  public info: Usuario[] = []


  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  async iniciarSesion() {

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    const res = await this.servicioAuth.InicioSesion(credenciales.email, credenciales.password).then(res => {
      alert("¡Se pudo ingresar con exito!")
      this.servicioRutas.navigate(['/inicio'])
    })
      .catch(err => {
        alert("Hubo un problema al iniciar sesion" + err)
      })






      try {
        //obtenemos usuario de la BD
        const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email)
  
        //Condicional verifica que enla base de datos el usuario existiera o que sea igual al de nuestra coleccion
        if (!usuarioBD || usuarioBD.empty) {
          alert("Correo electronico no esta registrado")
          this.limpiarInputs()
          return;
        }
  
  
  
        //vincula al primer documento de la coleccion "usuarios" que se obtenia desde la base de datos
        const usuarioDoc = usuarioBD.docs[0]
  
  
  //extrae los datos del documento en forma de objeto y se especifica que va a ser del tipo usuario
  //Se refiere a la interfaz usuario de nuestros modelos
        const usuarioData=usuarioDoc.data() as Usuario 
  
  
  //Encriptar la contraseña que el usuario envia mediante "iniciar sesion"
        const hashedPassword = CryptoJS.SHA256(credenciales.password).toString()
  
  
        //condicional que comparra la contraseña que acabamos de encriptar y que el usuario
        //envio con la que resivimos del "usuarioData"
        if (hashedPassword !== usuarioData.password) {
          alert("mal ahi bro, te equivocaste de contra")
          this.usuarios.password=''
          return;
        }
        const res = await this.servicioAuth.InicioSesion(credenciales.email, credenciales.password).then(res => {
          alert("¡Se pudo ingresar con exito!")
          this.servicioRutas.navigate(['/inicio'])
        })
          .catch(err => {
            alert("Hubo un problema al iniciar sesion" + err)
          })
      }catch{}{}
  
  
  




  }
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }

}
