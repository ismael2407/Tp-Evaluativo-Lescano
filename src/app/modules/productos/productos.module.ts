import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { GafasComponent } from './pages/gafas/gafas.component';
import { LentesDeSolComponent } from './pages/lentes-de-sol/lentes-de-sol.component';

import { CardComponent } from './component/card/card.component';
import { CardGafasComponent } from './component/card-gafas/card-gafas.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardLentesSolComponent } from './component/card-lentes-sol/card-lentes-sol.component';


@NgModule({
  declarations: [
    GafasComponent,
    LentesDeSolComponent,
    CardComponent,
    CardGafasComponent,
    ProductoComponent,
    CardLentesSolComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,

  ],
  exports:[
  
    CardComponent,
    CardGafasComponent,
    GafasComponent,
    LentesDeSolComponent,
    ProductoComponent
  ]
})
export class ProductosModule { }
