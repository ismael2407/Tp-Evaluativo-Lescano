import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { GafasComponent } from './modules/productos/pages/gafas/gafas.component';
import { LentesDeSolComponent } from './modules/productos/pages/lentes-de-sol/lentes-de-sol.component';

const routes: Routes = [

{
  path:"",component:InicioComponent
},
{
  path:"",component:GafasComponent
},
{
  path:"",component:LentesDeSolComponent
},

{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},

{
  path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
},

{
  path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
