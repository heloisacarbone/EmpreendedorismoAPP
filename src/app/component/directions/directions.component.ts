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


import { SpeechRecognitionService, SpeechSynthesisService } from '../speech/speech.component';


@Component({
    selector: 'Directions',
    templateUrl: './directions.component.html',
    styleUrls: ['./directions.component.css'],
    providers: [GoogleMapsAPIWrapper, SpeechRecognitionService, SpeechSynthesisService]
})

export class DirectionsComponent implements OnInit {

    @ViewChild('origem') public origemElement: ElementRef;
    @ViewChild('destino') public destinoElement: ElementRef;
    @ViewChild(DirectionsRouteComponent) vc: DirectionsRouteComponent;

    lat: number;
    lng: number;
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
        public ngZone: NgZone,
        private speech: SpeechRecognitionService,
        private speaker: SpeechSynthesisService
    ) { }
    ngOnInit(): void {
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
                            this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; 
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

    public getGeocoderAddress(lat: number, lng: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.mapsAPILoader.load().then(
                () => {
                    let geocoder = new google.maps.Geocoder;
                    let latlng = {lat: lat, lng: lng};
                    geocoder.geocode({'location': latlng}, function(results, status) {
                        if (results !== null && results !== undefined && results.length > 0) {
                            resolve(results[0].formatted_address);
                        } else {
                            reject('Couldn\'t find address. ');
                        }
                        
                    });
                }
            );
        });

    }

    public setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                /*this.getGeocoderAddress(this.lat, this.lng)
                    .then((address) => {
                        this.destinationInput.setValue(address);
                        
                    })
                    .catch((err) => {
                        console.log('Error setCurrentPosition: ', err);
                    });*/ 
            });
        }
    }

    public tryToRecord(controlOutput: FormControl){
        this.speech.record('pt_BR')
        .subscribe(e => {
            console.log(e);
            
            controlOutput.setValue(e);
        });        
    }

    public tryToSpeak(language: string, input: string){
        var voices = [];
        voices = speechSynthesis.getVoices();
        
        for(let i = 0; i < voices.length ; i++) {
            // var option = document.createElement('option');
            // option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            
            console.log(voices[i].name + ' - ' + voices[i].lang);

            // if(voices[i].default) {
            //   option.textContent += ' -- DEFAULT';
            // }
        
            // option.setAttribute('data-lang', voices[i].lang);
            // option.setAttribute('data-name', voices[i].name);
            // document.getElementById("voiceSelect").appendChild(option);
        }


        console.log("AQUI");
        console.log(this.speaker.checkVoices());
        this.speaker.speak(language, input);
    }


    public addFavorite(origem, destino) {
        this.router.navigate(['addfavoritos'], {
            queryParams: {
                'origem': origem,
                'destino': destino
            }
        });
    }

}
