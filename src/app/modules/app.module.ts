import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { routes } from './app.routes';

// Components
import { AppComponent } from '../component/app/app.component';
import { MapsComponent } from '../component/maps/maps.component';
import { FavoritePlaces } from '../component/favorite-places/favorite-places.component';
import { ModalObstacleComponent } from '../component/modal-obstacle/modal-obstacle.component';
import { MenuComponent } from '../component/menu/menu.component';
import { DirectionsComponent } from '../component/directions/directions.component';

// Services
import { ObstacleService } from '../services/obstacles/obstacle.service';
import { DirectionService } from '../services/directions/direction.service';

// Factories
import { ObstacleFactory } from '../factories/obstacles/obstacles.factory';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    FavoritePlaces,
    MenuComponent,
    ModalObstacleComponent,
    DirectionsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLU3CZCl4fWZ2U3vRuXMvVRewzpC1LAA',
      libraries: ["places"]
    })
  ],
  providers: [
    ObstacleService,
    DirectionService,
    ObstacleFactory
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
