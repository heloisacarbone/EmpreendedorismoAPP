import { Injectable } from '@angular/core';

@Injectable()
export class ObstacleFactory{

    translateGet(o: any): any {
        return o.map(obs => {
            return {
                type: this.chooseType(obs.type),
                lat: obs.lat,
                lng: obs.lng
            }
        });
    } 

    private chooseType (t: string): string {
        if (t === 'pole') {
            return 'Poste';
        } else if (t === 'hole') {
            return 'Buraco';
        } else {
            return 'Obstáculo';
        }
    }
    
}