import { Injectable } from '@angular/core';

@Injectable()
export class ObstacleFactory{

    translateGet(o: any): any {
        return o.map(obs => {
            return {
                type: this.chooseType(obs.Type),
                lat: obs.Latitude,
                lng: obs.Longitude
            }
        });
    } 

    private chooseType (t: string): string {
        if (t === 'pole') {
            return 'Poste';
        } else if (t === 'hole') {
            return 'Buraco';
        } else if (t === 'other') {
            return 'Obstáculo';
        } else {
          return t;
        }
    }
    
}
