import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent} from './products';
import {CartListComponent} from './cart';
import {PathNotFoundComponent} from './core';

const routes: Routes = [
    {
        path: 'home',
        component: ProductsListComponent
    },
    {
        path: 'products',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: CartListComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
