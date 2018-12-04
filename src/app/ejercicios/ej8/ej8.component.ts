import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ej8',
  templateUrl: './ej8.component.html',
  styleUrls: ['./ej8.component.scss']
})
export class Ej8Component implements OnInit {
  url = 'http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris';
  chiste;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  fetchChiste() {
    this.http.get(this.url).subscribe(chiste => {
      this.chiste = chiste['value']['joke'];
    });
  }
}
