import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import { ObstacleFactory } from '../../factories/obstacles/obstacles.factory';
import { SetEndPointsHelper } from '../../helpers/endpoints/set-end-points.helper';

@Injectable()
export class ObstacleService{
    constructor(
        private http: Http,
        private obstacleFactory: ObstacleFactory,
        private setEndPointsHelper: SetEndPointsHelper
    ) {}

    add(o: any): Observable<any> {
        return this.http.post(this.setEndPointsHelper.set('/obstacle/insert'), o)
            .map(res => res.json())
            .catch(err => err);
    } 
    get(lat: string, lng: string, type?: string): Observable<any> {
        return this.http.get(this.setEndPointsHelper.set('/obstacle/get?lat='+lat+"&lng="+lng))
            .map(res => this.obstacleFactory.translateGet(res.json()))
            .catch(err => err);
    } 
}