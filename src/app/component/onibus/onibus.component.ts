import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { OnibusService } from '../../services/onibus/onibus.service';
import { OnibusFactory } from '../../factories/onibus/onibus.factory';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css'],
})

export class OnibusComponent {
  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // Add 'implements OnInit' to the class.

  showResults: boolean;
  showResult = false;
  lines: any = [];
  lat: number;
  lng: number;
  zoom: number = 14;
  busPosition: any = [];
  mapVisible: boolean = false;
  constructor(
      public onibusService: OnibusService,
      public onibusFactory: OnibusFactory
  ) {}

  buscarLinha(nomeOnibus) {
    this.mapVisible = false;
    this.onibusService.authenticate().subscribe(
      data => {
        this.onibusService.getBusLine(nomeOnibus).subscribe(
            data => {
              console.log(data);
                this.lines = this.onibusFactory.formatBusLine(data);
            },
            err => {
                console.log('err', err);
            }
    );
      }
    );
  }

  acharPosicoesBus(cl, name) {
    console.log(cl);
    this.onibusService.authenticate().subscribe(
      data => {
        this.onibusService.getStopByLine(cl).subscribe(
            data => {
              console.log('paradas', data);
              if (data.vs.length > 0) {
                this.setCurrentPosition();
                this.mapVisible = true;
                this.busPosition = data.vs.map(p => {
                  return {
                    lat: p.py,
                    lng: p.px,
                    bus: name
                  };
                });
              }
            },
            err => {
                console.log('err', err);
            }
          );
      }
    );
  }

  setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
