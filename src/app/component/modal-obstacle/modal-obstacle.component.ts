import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'modal-obstacle',
  templateUrl: './modal-obstacle.component.html',
  styleUrls: ['modal-obstacle.component.css']
})

export class ModalObstacleComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    constructor(
        public router: Router
    ) {}
}