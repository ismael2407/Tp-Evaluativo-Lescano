import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';


//Operadores tipo "observables"
import { map, switchMap, of, from } from 'rxjs'
export const rutaProtegidaGuard: CanActivateFn = (route, state) => {

  //Injectamos/instanciamos servicio de autentidicacion en el guardian (forma local)

  const servicioAuth = inject(AuthService)
  //Injectamos/instanciamos servicio de rutas de forma local
  const servicioRutas = inject(Router)

  //Especificamos cual es el rol que va a esperar el guardian para activarse
  const rolEsperado = "admin"
  
  return true;
};
