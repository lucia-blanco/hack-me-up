import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ej5',
  templateUrl: './ej5.component.html',
  styleUrls: ['./ej5.component.scss']
})
export class Ej5Component implements OnInit {
  peliculas;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/films.json').subscribe(everything => {
      this.peliculas = everything;
    });
  }

  sort(filter) {
    switch (filter) {
      case 'l':
        break;
      case 'p':
        break;
      case 't':
        break;
    }
  }

}
