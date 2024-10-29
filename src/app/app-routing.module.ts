import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';



//GUARDIAN PARA LA VISTA DE ADMINISTRADOR
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

const routes: Routes = [

  {
    path: "", component: InicioComponent
  },


  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path: "", loadChildren: () => import('./modules/productos/productos.module').then(m => m.ProductosModule)
  },

  {
    path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },
  {
    path: "", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),

    //Definirle al guardian que proteja la ruta Admin y que espere un rol de tipo "admin"
    canActivate: [rutaProtegidaGuard], data: { role: 'admin' }
  },
  {
    path: "", loadChildren: () => import('./modules/carrito/carrito.module').then(m => m.CarritoModule)
  },
  {
    path: "", loadChildren: () => import('./modules/acercade/acercade.module').then(m => m.AcercadeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
