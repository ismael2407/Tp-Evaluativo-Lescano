import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicios de autentificacion
import { AuthService } from '../../services/auth.service';
//importamos servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
//importamos componentes de rutas de angular
import { Router } from '@angular/router';



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
