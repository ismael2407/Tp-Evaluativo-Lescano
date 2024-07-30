import { Component } from '@angular/core';
import { LentesDeSol } from 'src/app/models/lentes-de-sol';
@Component({
  selector: 'app-lentes-de-sol',
  templateUrl: './lentes-de-sol.component.html',
  styleUrls: ['./lentes-de-sol.component.css']
})
export class LentesDeSolComponent {

  public info: LentesDeSol[]

  constructor() {
    this.info = [

      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Indian Mblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/lentes-sol_1.jpg",
        alt:"...",
        precio:96.000
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Malice Green Pearl S15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/lentes-sol_2.jpg",
        alt:"...",
        precio:72.000
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Plainz Sblk G15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/lentes-sol_3.jpg",
        alt:"...",
        precio:96.000
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Bruk Sblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/lentes-sol_4.jpg",
        alt:"...",
        precio:96.000
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Crim Sblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "./assets/img/productos/lentes-sol_5.jpg",
        alt:"...",
        precio:96.000
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Latter Mblk Revo Red",
        marca: "Vulk",
        material: "Acetato",
        imagen:"./assets/img/productos/lentes-sol_6.jpg",
        alt:"...",
        precio:96.000
      },

    ]
  }
}
