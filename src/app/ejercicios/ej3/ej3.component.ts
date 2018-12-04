import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.component.html',
  styleUrls: ['./ej3.component.scss']
})
export class Ej3Component implements OnChanges {

  url = 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg';
  nfilas = 10;

  constructor() { }

  ngOnChanges() {
    console.log(this.nfilas);
  }

  numberToArray(n: number): Array<string> {
    const rtn = [];
    for (let i = 0; i < n; i++) {
      rtn.push('');
    }
    return rtn;
  }

}
