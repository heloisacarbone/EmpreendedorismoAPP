import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public router: Router) {}

  public tab = 3;
  public navButton(tab) {
    this.tab = tab;

  }
}

