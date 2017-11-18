import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ObstacleFactory } from '../../factories/obstacles/obstacles.factory';
import { SetEndPointsHelper } from '../../helpers/endpoints/set-end-points.helper';

@Injectable()
export class OnibusService {

    constructor(
        private http: Http,
        private obstacleFactory: ObstacleFactory,
        private setEndPointsHelper: SetEndPointsHelper
    ) {}

    getBusLine(line: string) {
        return this.http.get(this.setEndPointsHelper.set('/sptrans/linha/'+line))
            .map(res => res.json())
            .catch(err => err);
    }

    getStopByLine(code: any) {
        return this.http.get(this.setEndPointsHelper.set('/sptrans/posicao/'+code))
            .map(res => res.json())
            .catch(err => err);
    }
}
