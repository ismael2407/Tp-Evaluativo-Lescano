import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './componentes/table/table.component';
import { AdminComponent } from './page/admin/admin.component';


@NgModule({
  declarations: [
    TableComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    AdminComponent,
    TableComponent
  ]
})
export class AdminModule { }
