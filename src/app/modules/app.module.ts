import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from '../component/app/app.component';
import { MapsComponent } from '../component/maps/maps.component';
import { FavoritePlaces } from '../component/favorite-places/favorite-places.component'; 
import { ModalObstacleComponent } from '../component/modal-obstacle/modal-obstacle.component';
import { MenuComponent } from '../component/menu/menu.component';


import { ObstacleService } from '../services/obstacles/obstacle.service';


import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    FavoritePlaces,
    MenuComponent,
    ModalObstacleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLU3CZCl4fWZ2U3vRuXMvVRewzpC1LAA'
    })
  ],
  providers: [
    ObstacleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
