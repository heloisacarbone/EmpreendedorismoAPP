import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

@Injectable()
export class OnibusService {
    constructor(
        private http: Http
    ) {}

    authenticate(): void {
        // http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=eed2f0a08d1982d4facdad7ec54cd0d46ad0e00664e9b9fd72b74a9187d255c0
        console.log('authenticated');
        // this.http.post('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=eed2f0a08d1982d4facdad7ec54cd0d46ad0e00664e9b9fd72b74a9187d255c0', {})
        // .subscribe(res => console.log('hm'));
    }

    getBusByName (name: string) {
        name = encodeURIComponent(name.trim());
        this.authenticate();

    }
}
