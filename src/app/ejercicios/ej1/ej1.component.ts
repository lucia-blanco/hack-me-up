import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.scss']
})
export class Ej1Component implements OnInit {

  visibilidad = false;

  constructor() { }

  ngOnInit() {
  }

  visible() {
    this.visibilidad = !this.visibilidad;
  }

}
