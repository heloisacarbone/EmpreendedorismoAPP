import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  ngOnInit(): void {
    console.log('aq');
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position)
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          }
      );
    }
  }
  constructor(public router: Router) {}

}
