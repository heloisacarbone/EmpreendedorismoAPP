import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  lat: number = -23.4821149;
  lng: number = -46.4995538;
 
  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    this.setCurrentPosition();

    // if (window.navigator && window.navigator.geolocation) {
    //   window.navigator.geolocation.getCurrentPosition(
    //       position => {
    //         console.log(position)
    //         this.lat = position.coords.latitude;
    //         this.lng = position.coords.longitude;
    //       }
    //   );
    // }
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  

  public tab = 3;
  public navButton(tab) {
    this.tab = tab;

  }
}

