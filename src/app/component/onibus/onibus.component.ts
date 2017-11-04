import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { OnibusService } from '../../services/onibus/onibus.service';


@Component({
  selector: 'onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css'],
})

export class OnibusComponent{
  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // Add 'implements OnInit' to the class.

  showResults: boolean;
  showResult = false;
  constructor(
      public OnibusService: OnibusService
  ) {}





  buscarLinha = (nomeOnibus) => {
    this.OnibusService.getBusByName('nomeOnibus');
    this.showResults = true;

  }
}
