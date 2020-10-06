import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'throttling-rxjs';
  list;
  constructor(private http: HttpClient) {}

  search(text) {
    this.http.get("https://nztodo.herokuapp.com/api/task/?format=json&search=" + text).subscribe(result => {
      this.list = result;
    });
  }
}