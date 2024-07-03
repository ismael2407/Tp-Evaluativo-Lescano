import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { GafasComponent } from './pages/gafas/gafas.component';
import { LentesDeSolComponent } from './pages/lentes-de-sol/lentes-de-sol.component';


@NgModule({
  declarations: [
    GafasComponent,
    LentesDeSolComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
