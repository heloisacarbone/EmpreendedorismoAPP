import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Maps from 'google-maps';

import { ObstacleService } from '../../services/obstacles/obstacle.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'mapa',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent {
  lat: number = -23.4821149;
  lng: number = -46.4995538;
  zoom: number = 16;
  obstacles: any = [];
  showDialog = false;
 
  constructor(
    public router: Router,
    public obstacleService: ObstacleService
  ) {}

  ngOnInit(): void {
    this.setCurrentPosition();
    this.loadObstacles();

  }

  public setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  public openModalObstacle() {

    this.router.navigate(['obstaculos'], {
      queryParams: {
          'lat': this.lat,
          'lng': this.lng
      }
    });
  }

  public loadObstacles() {
    this.obstacleService.get(String(this.lat),String(this.lng))
      .subscribe(
        obstacles => {
          this.obstacles = obstacles;
          console.log("Obstaculos", obstacles);
        }
      );
  }
}