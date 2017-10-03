import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})

export class OnibusComponent {
    showResults: boolean=false;

    buscarLinha = (nomeOnibus) => {
        this.showResults=true;

    }
}
