import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';
import * as Maps from 'google-maps';

import { DirectionService } from '../../services/directions/direction.service';


@Component({
  selector: 'Directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})

export class DirectionsComponent implements OnInit {
    lat: number = -23.4821149;
    lng: number = -46.4995538;
    zoom = 16;
    constructor(
        private router: Router,
        private DirectionService: DirectionService
      ) {}
    ngOnInit(): void {
        this.setCurrentPosition();
    }

    private calculateRoute(or, des){
        console.log('calculate route! ',or,"-" ,des );
        this.DirectionService.test();
    }

    private setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }

}
