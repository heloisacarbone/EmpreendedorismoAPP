import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SetEndPointsHelper {

    config = {
        "APIEndpoint": "http://localhost:7010"
    };
    constructor(private http: Http) {
        // this.http.get('src/app/config/settings.json')
        //     .subscribe(res => this.config = res.json());
        // console.log('cinf', this.config);
    }
    set(url: string): string {
        const u = this.config.APIEndpoint + url;
        console.log('endpoint', u);
        return u;
    }
}