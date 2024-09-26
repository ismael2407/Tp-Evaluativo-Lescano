import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';

import { MatButtonModule } from '@angular/material/button';
import { CarritoComponent } from './pages/carrito/carrito.component';

@NgModule({
  declarations: [
    InicioComponent,
    CarritoComponent,
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule
  ],
  exports:[
    MatButtonModule
  ]
})
export class InicioModule { }
