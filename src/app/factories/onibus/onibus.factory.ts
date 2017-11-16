import { Injectable } from '@angular/core';

@Injectable()
export class OnibusFactory {

    formatBusLine(o: any): any {
      let check = {};
        return o.map(obs => {
            let name = obs.lt + '/' + obs.tl + ' | ' + obs.tp;
            if (check[name]) {
              name = obs.lt + '/' + obs.tl + ' | ' + obs.ts;
            }
            if (!check[name]) {
              check[name] = true;
              return {
                  name: name,
                  codigoLinha: obs.cl 
              };
            }
        });
    }
}
