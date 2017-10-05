import { Component, OnInit, Input, Output, OnChanges, EventEmitter, 
            ViewChild, ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';
import * as Maps from 'google-maps';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

import { DirectionService } from '../../services/directions/direction.service';


@Component({
  selector: 'Directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})

export class DirectionsComponent implements OnInit {

    @ViewChild('origem') public origemElement: ElementRef;
    @ViewChild('destino') public destinoElement: ElementRef;

    lat: number = -23.4821149;
    lng: number = -46.4995538;
    zoom = 16;
    constructor(
        public router: Router,
        public DirectionService: DirectionService,
        public mapsAPILoader: MapsAPILoader,
        public ngZone: NgZone
      ) {}
    ngOnInit(): void {
        this.setAutoCompleteFor(this.origemElement);
        this.setAutoCompleteFor(this.destinoElement);
        this.setCurrentPosition();
    }

    public calculateRoute(or, des){
        console.log('calculate route! ',or,"-" ,des );
        this.DirectionService.test();
    }

    public setAutoCompleteFor(searchElement: ElementRef){
        this.mapsAPILoader.load().then(
            () => {
                let autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement);
    
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    
                        if(place.geometry === undefined || place.geometry === null ){
                            return;
                        }
                    });
                });
            }
        );
    }

    public setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }

}
