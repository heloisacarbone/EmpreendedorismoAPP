import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    ViewChild, ElementRef, NgZone
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Maps from 'google-maps';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

// import { ObstacleService } from '../../services/obstacles/obstacle.service';

@Component({
  selector: 'modal-add-favorite',
  templateUrl: './modal-add-favorite.component.html',
  styleUrls: ['modal-add-favorite.component.css']
})

export class ModalAddFavoriteComponent implements OnInit {
    ngOnInit(): void {
        // Achar nome da rua em que estamos, para realmente validar com o user e pegar as coordenadas dela.
    }
    public address: any = [];
    public favorite: any = {
        name: ""
    };
    public otherInput: FormControl;
    @ViewChild('otherInput') public outroElement: ElementRef;
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public mapsAPILoader: MapsAPILoader,
        public ngZone: NgZone
    ) {
        this.route.queryParams.subscribe(params => {
            if (params['destino'] !== null && params['destino'] !== undefined && params['destino'] !== '') { 
                this.address.push(params['destino']);
            }
            if (params['origem'] !== null && params['origem'] !== undefined && params['origem'] !== '') { 
                this.address.push(params['origem']);
            }
        });

        this.otherInput = new FormControl();
        //this.setAutoCompleteFor(this.outroElement);
      
    }

    public setAutoCompleteFor(searchElement: ElementRef) {
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
                        
                    });
                });
            }
        );
    }
    public registerFavorite(favoriteForm: NgForm) {
        let favorite = favoriteForm.value;
        if (favorite.addr = 'other') {

        }
    }
}