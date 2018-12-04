import { Component, OnChanges } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.component.html',
  styleUrls: ['./ej2.component.scss']
})
export class Ej2Component implements OnChanges {

  minimo;
  maximo;
  num = 0;
  valid = false;

  constructor() { }

  ngOnChanges() {
    console.log(this.maximo);
    console.log(this.minimo);
  }

  reset() {
    this.num = 0;
  }

  validate() {
    if (this.minimo < this.maximo && this.maximo !== undefined && this.minimo !== undefined) {
      this.valid = true;
    }
    if (this.minimo >= this.maximo) {
      this.valid = false;
    }
  }

  aleatorio() {
    this.num = Math.floor(Math.random() * (this.maximo + 1 - this.minimo)) + this.minimo;
  }
}
