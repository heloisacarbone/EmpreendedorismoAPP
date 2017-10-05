import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor(public router: Router) {}
  public goToMap() {
    this.router.navigate(['mapa']);
  }
  public goToFavorite() {
    this.router.navigate(['favoritos']);
  }
  public goToDirections(){
    this.router.navigate(['directions']);
  }
  public goToBus() {
    this.router.navigate(['onibus']);
  }
}
