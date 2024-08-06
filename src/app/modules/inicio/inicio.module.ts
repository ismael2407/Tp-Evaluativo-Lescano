import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
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
