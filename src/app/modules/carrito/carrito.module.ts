import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido.component'; 


@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarritoModule { }
