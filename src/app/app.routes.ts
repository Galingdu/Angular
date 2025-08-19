import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: CartListComponent
    }
    ,{
        path: 'home',
        component: HomeComponent
    }
    ,{
        path: 'contact',
        component:ContactPageComponent
    }
    ,{
        path: 'about',
        component:AboutPageComponent
    }
    ,{
        path: '**',
        component:NotFoundComponent
    }
];
