import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,


  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    MatButtonModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InicioModule { }
