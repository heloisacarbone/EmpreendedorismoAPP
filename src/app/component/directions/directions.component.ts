import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

import { DirectionService } from '../../services/obstacles/direction.service';


@Component({
  selector: 'Directions',
  templateUrl: './directions.component.html',
  providers:[DirectionService]
})

export class Directions implements OnInit {
    constructor(
        private router: Router,
        private DirectionService: DirectionService
      ) {}
    ngOnInit(): void {
        console.log('init directions')
    }

    private calculateRoute(or, des){
        console.log('calculate route! ',or,"-" ,des );
        this.DirectionService.test();
    }

}