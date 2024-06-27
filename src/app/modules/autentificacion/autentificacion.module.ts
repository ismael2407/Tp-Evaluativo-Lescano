import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';

//VISTAS DE AUTENTIFICACION
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

//COMPONENTES DE MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
 
  declarations: [
    IniciosesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,

  ],
  exports:[
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
  ]
})
export class AutentificacionModule { }
