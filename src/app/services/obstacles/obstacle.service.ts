import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';

@Injectable()
export class ObstacleService{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    constructor(
        private http: Http
    ) {}

    add(o: any): Observable<any> {
        return this.http.post('http://localhost:7010/obstacle/insert', o)
            .map(res => res.json())
            .catch(err => err);
    } 
    get(lat: string, lng: string, type?: string): Observable<any> {
        return this.http.get('http://localhost:7010/obstacle/get?lat='+lat+"&lng="+lng)
            .map(res => res.json())
            .catch(err => err);
    } 
}