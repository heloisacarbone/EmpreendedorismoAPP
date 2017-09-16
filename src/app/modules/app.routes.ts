import { Routes } from '@angular/router';
import { AppComponent } from '../component/app/app.component';
import { MapsComponent } from '../component/maps/maps.component';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { 
        path: 'mapa', 
        component: MapsComponent
    },
    { 
        path: '',       
        component: AppComponent
    }
  
    
];