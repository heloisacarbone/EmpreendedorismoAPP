import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from '../component/app/app.component';
import { MapsComponent } from '../component/maps/maps.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMLU3CZCl4fWZ2U3vRuXMvVRewzpC1LAA'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    MapsComponent
  ]
})
export class AppModule { }
