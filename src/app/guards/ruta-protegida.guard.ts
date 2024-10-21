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



  //FROM nos convierte una promesa en observable
  return from(servicioAuth.ObtenerUid()).pipe(
    switchMap(uid => {
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {

              //Si coincide el rol esperado, damos acceso al usuario
              console.log("Usuario verificado como administrador")

              return true
            }
            else {
              //Detengamos acceso al usuario
              return false
            }
          })
        )
      } else {
        console.log("Usuario no validado. Permisos insuficientes")

        //Redireccionamos acceso a inicio para usuarios no validados
        return of(servicioRutas.createUrlTree(['/inicio']))
      }
    })
  )
};
