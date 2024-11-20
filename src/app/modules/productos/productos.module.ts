import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { GafasComponent } from './pages/gafas/gafas.component';
import { LentesDeSolComponent } from './pages/lentes-de-sol/lentes-de-sol.component';

import { CardComponent } from './component/card/card.component';
import { CardGafasComponent } from './component/card-gafas/card-gafas.component';

import { CardLentesContactoComponent } from './component/card-lentes-contacto/card-lentes-contacto.component';
import { LentesContactoComponent } from './pages/lentes-contacto/lentes-contacto.component';
import { CardLentesSolComponent } from './component/card-lentes-sol/card-lentes-sol.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    GafasComponent,
    LentesDeSolComponent,
    CardComponent,
    CardGafasComponent,
    CardLentesSolComponent,
    CardLentesContactoComponent,
    LentesContactoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
  
    CardComponent,
    CardGafasComponent,
    GafasComponent,
    LentesDeSolComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
