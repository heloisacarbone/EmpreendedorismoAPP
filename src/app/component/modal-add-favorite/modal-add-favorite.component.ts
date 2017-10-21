import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

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
    public lat: number;
    public lng: number;
    public sucessInsert:boolean =false;
    constructor(
        public router: Router,
        public route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe(params => {
            this.lat = params['lat'];
            this.lng = params['lng'];
        });
    }

    registerObstacle(form: NgForm) {
       
      }
}