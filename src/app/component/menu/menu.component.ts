import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor(private router: Router) {}
  private goToMap() {
    this.router.navigate(['mapa']);
  }
  private goToFavorite() {
    this.router.navigate(['favoritos']);
  }
  private goToBus() {
    this.router.navigate(['onibus']);
  }
}
