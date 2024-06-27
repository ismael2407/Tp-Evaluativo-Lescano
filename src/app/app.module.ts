import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/components/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Importamos herrramientas de las base de datos
import {enviroment} from 'src/environments/environments'; //Vincula la BD con la APP

import{AngularFireModule} from '@angular/fire/compat' //Trabaja con las colecciones de informacion
import{AngularFireAuthModule} from '@angular/fire/compat/auth' //Trabaja con la autentificacion
import{AngularFireStorageModule} from'@angular/fire/compat/storage' //Trabaja con imagenes y archivos 



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Componentes globales
    SharedModule,
    //Vinculacion con FireBase
    AngularFireStorageModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),//Inicializar FireBase dentro del proyecto
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

