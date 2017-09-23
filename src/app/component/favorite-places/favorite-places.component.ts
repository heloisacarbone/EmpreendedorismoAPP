import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fav-place',
  templateUrl: './favorite-places.component.html'
})

export class FavoritePlaces {
  
  constructor(
    public router: Router
  ) {}

}

