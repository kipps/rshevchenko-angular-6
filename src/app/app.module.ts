import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

//Modules
import {CoreModule} from './core/core.module';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

//Routing
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        ProductsModule,
        CartModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
