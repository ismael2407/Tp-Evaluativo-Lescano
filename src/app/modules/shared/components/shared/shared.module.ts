import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//COMPONENTES LOCALES Y GLOBALES
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

//COMPONENTES DE MATERIAL
//Navbar
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
//Menu
import { MatMenuModule } from '@angular/material/menu';


//IMPORTACION PARA EL ACCESO A TODAS LAS RUTAS
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SharedModule { }
