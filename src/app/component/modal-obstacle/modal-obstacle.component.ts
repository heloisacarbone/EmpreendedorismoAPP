import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

import { ObstacleService } from '../../services/obstacles/obstacle.service';

@Component({
  selector: 'modal-obstacle',
  templateUrl: './modal-obstacle.component.html',
  styleUrls: ['modal-obstacle.component.css']
})

export class ModalObstacleComponent implements OnInit {
    ngOnInit(): void {
        // Achar nome da rua em que estamos, para realmente validar com o user e pegar as coordenadas dela.
    }
    public lat: number;
    public lng: number;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public obstacleService: ObstacleService
    ) {
        this.route.queryParams.subscribe(params => {
            this.lat = params['lat'];
            this.lng = params['lng'];
        });
    }

    registerObstacle(form: NgForm) {
        let bodyReq = {
            type: form.value.obsradio,
            latitude: String(this.lat),
            longitude: String(this.lng)
        }
        console.log('body', bodyReq);
        this.obstacleService.add(bodyReq)
            .subscribe(
            obstacles => {
                console.log("Add", obstacles);
            }
            );
      }
}