import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ej4',
  templateUrl: './ej4.component.html',
  styleUrls: ['./ej4.component.scss']
})
export class Ej4Component implements OnInit {
  peliculas;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/films.json').subscribe(everything => {
      this.peliculas = everything;
    });
  }

}
