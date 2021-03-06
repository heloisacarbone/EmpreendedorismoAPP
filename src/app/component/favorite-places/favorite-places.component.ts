import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'fav-place',
  templateUrl: './favorite-places.component.html',
  styleUrls: ['./favorite-places.component.css'],
})

export class FavoritePlaces implements OnInit{
  
  favorite: any = [];

  constructor(
    public router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    console.log("Aquii");
    let favoritePlaces = this.cookieService.get('favoritePlaces');
    console.log('cookie', favoritePlaces);
    if (favoritePlaces !== null && favoritePlaces !== undefined) {
      let places = favoritePlaces.split(';');
      this.favorite = places.map(f => {
        let data  = f.split(':');
        return {
          name: data[0],
          address: data[1]
        };
      });
      console.log('data', this.favorite);
    } 
  }
}

