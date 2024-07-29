import { Component } from '@angular/core';
import { Gafas } from 'src/app/models/gafas';

@Component({
  selector: 'app-gafas',
  templateUrl: './gafas.component.html',
  styleUrls: ['./gafas.component.css']
})
export class GafasComponent {



  public info: Gafas[]

  constructor() {
    this.info = [

      {
        uid: "",
        nombre: "Gafas",
        modelo: "Indian Mblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_1.jpg",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Malice Green Pearl S15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_2.jpg",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Plaiz Sblk G15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_3.jpg",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Bruk Sblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_4.jpg",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Crim Sblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_5.jpg",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Gafas  ",
        modelo: "Latter Mblk Revo Red",
        marca: "Vulk",
        material: "Acetato",
        imagen:"src/assets/img/productos/lentes-sol_6.jpg",
        alt:"..."
      },

    ]
  }

}
