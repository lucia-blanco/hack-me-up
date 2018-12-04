import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej7',
  templateUrl: './ej7.component.html',
  styleUrls: ['./ej7.component.scss']
})
export class Ej7Component implements OnInit {
  filas = [1, 2, 3];
  columnas = [1, 2, 3];
  tablero = [];

  constructor() { }

  ngOnInit() {
  }

}
