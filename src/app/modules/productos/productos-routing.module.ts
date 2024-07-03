import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GafasComponent } from './pages/gafas/gafas.component';
import { LentesDeSolComponent } from './pages/lentes-de-sol/lentes-de-sol.component';
const routes: Routes = [

{
  path:"gafas",component:GafasComponent
},

{
  path:"lentesdesol",component:LentesDeSolComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
