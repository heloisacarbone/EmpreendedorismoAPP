import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    MapsComponent
  ]
})
export class AppModule { }
