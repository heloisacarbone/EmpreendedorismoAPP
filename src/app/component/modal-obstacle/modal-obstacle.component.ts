import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

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

    registerObstacle(form: NgForm) {
        console.log(form.value);
        // {email: '...', password: '...'}
        // ... <-- now use JSON.stringify() to convert form values to json.
      }
}