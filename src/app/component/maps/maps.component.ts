import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Maps from 'google-maps';

@Component({
  selector: 'mapa',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent {
  lat: number = -23.4821149;
  lng: number = -46.4995538;
  zoom: number = 16;
  showDialog = false;
 
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setCurrentPosition();

  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  private openModalObstacle() {
    this.router.navigate(['obstaculos']);
  }

}