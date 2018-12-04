import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej6',
  templateUrl: './ej6.component.html',
  styleUrls: ['./ej6.component.scss']
})
export class Ej6Component implements OnInit {
  factura = [];
  img;
  cantidad;
  precio;
  total = 0;
  totals;

  constructor() { }

  ngOnInit() {
  }

  push() {
    const linea = {
      img: this.img,
      precio: parseFloat(this.precio).toFixed(2),
      cantidad: this.cantidad,
      total: (parseFloat(this.precio) * parseFloat(this.cantidad)).toFixed(2)
    };
    this.factura.push(linea);
    this.total += (parseFloat(this.precio) * parseFloat(this.cantidad));
    console.log(this.total);
    this.totals = (this.total).toFixed(2);
  }

}
