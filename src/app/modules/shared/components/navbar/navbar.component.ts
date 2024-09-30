import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

logueado=true;
deslogueado=false;

constructor(
  public servicioAuth:AuthService,
  public servicioRutas:Router
)
{}

inicio(){
  this.logueado=false
  this.deslogueado=true
}

cerrarSesion(){
  this.deslogueado = false

  this.servicioAuth.CerrarSesion()
  this.servicioRutas.navigate(['/'])
  this.logueado = true
}


//Funcion cambiarFondo

cambiarFondo() {
  let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
  let label_toggle: HTMLElement | null = document.getElementById('label_toggle') as HTMLElement

  if (toggle) {
    let checked: boolean = toggle.checked
    document.body.classList.toggle("dark", checked)


    if (checked) {
      label_toggle!.innerHTML = '<i class="fa-regular fa-sun"></i>'
    }
    else {
      label_toggle!.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
  }
}

}
