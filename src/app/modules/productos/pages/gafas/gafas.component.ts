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
        modelo: "Alootikki 03",
        marca: "360",
        material: "Plastico",
        imagen: "./assets/img/productos/gafas_1.jpg",
        alt:"...",
        precio:45.500
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Clevel C4",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/gafas_2.jpg",
        alt:"...",
        precio:76.000
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Plainz C1",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/gafas_3.jpg",
        alt:"...",
        precio:76.000
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Coron Sblk",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/gafas_4.jpg",
        alt:"...",
        precio:76.000
      },
      {
        uid: "",
        nombre: "Gafas",
        modelo: "Gotte Mblk Blue",
        marca: "Rusty",
        material: "Metal",
        imagen: "./assets/img/productos/gafas_5.jpg",
        alt:"...",
        precio:84.000
      },
      {
        uid: "",
        nombre: "Gafas  ",
        modelo: "Kirt MDB",
        marca: "Vulk",
        material: "Metal",
        imagen:"./assets/img/productos/gafas_6.jpg",
        alt:"...",
        precio:76.000
      },

    ]
  }

}
