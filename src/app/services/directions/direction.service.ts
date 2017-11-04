import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

// TA SO COPIADO DO SERVICE DO OBSTACULO

@Injectable()
export class DirectionService{
    constructor(
        private http: Http
    ) {}

    test(): void {
        // https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=AIzaSyAMLU3CZCl4fWZ2U3vRuXMvVRewzpC1LAA
        console.log('serviço chamado');
    }
}
