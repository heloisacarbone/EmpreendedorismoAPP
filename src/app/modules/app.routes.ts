import { Routes } from '@angular/router';
import { AppComponent } from '../component/app/app.component';
import { MapsComponent } from '../component/maps/maps.component';
import { FavoritePlaces } from '../component/favorite-places/favorite-places.component';
import { MenuComponent } from '../component/menu/menu.component';
import { ModalObstacleComponent } from '../component/modal-obstacle/modal-obstacle.component';
import { ModalAddFavoriteComponent } from '../component/modal-add-favorite/modal-add-favorite.component';
import { DirectionsComponent } from '../component/directions/directions.component';
import { OnibusComponent } from '../component/onibus/onibus.component';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
    {
        path: 'mapa',
        component: MapsComponent
    },
    {
        path: 'favoritos',
        component: FavoritePlaces
    },
    {
        path: 'addfavoritos',
        component: ModalAddFavoriteComponent
    },
    {
        path: 'obstaculos',
        component: ModalObstacleComponent
    },
    {
        path: 'directions',
        component: DirectionsComponent
    },
    {
        path: '',
        component: MenuComponent
    },
    {
        path:'onibus',
        component: OnibusComponent
    }


];