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
      public onibusService: OnibusService
  ) {}





  buscarLinha(nomeOnibus) {
    console.log(nomeOnibus);
    this.onibusService.authenticate().subscribe(
      data => {
        console.log("aut", data);
        this.onibusService.getBusLine(nomeOnibus).subscribe(
            data => {
                console.log("res", data);
            },
            err => {
                console.log("err", err);
            }
    );
      }
    );
    
    
    this.showResults = true;

  }
}
