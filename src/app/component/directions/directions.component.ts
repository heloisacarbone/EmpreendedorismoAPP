import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    ViewChild, ElementRef, NgZone
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Maps from 'google-maps';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { } from '@types/googlemaps';

import { DirectionsRouteComponent } from '../directions-route/directions-route.component';
import { DirectionService } from '../../services/directions/direction.service';


@Component({
    selector: 'Directions',
    templateUrl: './directions.component.html',
    styleUrls: ['./directions.component.css'],
    providers: [GoogleMapsAPIWrapper]
})

export class DirectionsComponent implements OnInit {

    @ViewChild('origem') public origemElement: ElementRef;
    @ViewChild('destino') public destinoElement: ElementRef;
    @ViewChild(DirectionsRouteComponent) vc: DirectionsRouteComponent;

    lat: number = -23.4821149;
    lng: number = -46.4995538;
    destinationInput: FormControl;
    destinationOutput: FormControl;
    origin: number;
    destination: number;
    zoom = 16;
    constructor(
        public router: Router,
        public DirectionService: DirectionService,
        public mapsAPILoader: MapsAPILoader,
        public gmapsApi: GoogleMapsAPIWrapper,
        public ngZone: NgZone
    ) { }
    ngOnInit(): void {
        console.log("AQUII");
        this.destinationInput = new FormControl();
        this.destinationOutput = new FormControl();
        this.setCurrentPosition();
        this.setAutoCompleteFor(this.origemElement, 'ORG');
        this.setAutoCompleteFor(this.destinoElement, 'DES');
        
    }

    public calculateRoute(or, des) {
        this.vc.updateDirections();
        this.DirectionService.test();
    }

    public setAutoCompleteFor(searchElement: ElementRef, mode: any) {
        this.mapsAPILoader.load().then(
            () => {
                let autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement);

                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                        console.log("place", place);
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }

                        if (mode === 'ORG') {
                            this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                            this.vc.originPlaceId = place.place_id;
                        } else {
                            this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; // its a example aleatory position
                            this.vc.destinationPlaceId = place.place_id;
                        }

                        if (this.vc.directionsDisplay === undefined) {
                            this.mapsAPILoader.load().then(() => {
                                this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                            });
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
