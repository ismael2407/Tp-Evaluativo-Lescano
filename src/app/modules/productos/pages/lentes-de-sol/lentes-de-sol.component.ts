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
        imagen: "src/assets/img/productos/lentes-sol_1.webp",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Malice Green Pearl S15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_2.webp",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Plaiz Sblk G15",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_3.webp",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Bruk Sblk S10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_4.webp",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Crim Sblk S 10",
        marca: "Rusty",
        material: "Acetato",
        imagen: "src/assets/img/productos/lentes-sol_5.webp",
        alt:"..."
      },
      {
        uid: "",
        nombre: "Lentes de sol",
        modelo: "Latter Mblk Revo Red",
        marca: "Vulk",
        material: "Acetato",
        imagen:"src/assets/img/productos/lentes-sol_6.webp",
        alt:"..."
      },

    ]
  }
}
