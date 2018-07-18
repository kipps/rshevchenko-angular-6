import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItemComponent, CartListComponent} from '.';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [CartItemComponent, CartListComponent]
})
export class CartModule {
}
