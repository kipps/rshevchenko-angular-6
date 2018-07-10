import {Injectable} from '@angular/core';
import {Product} from '../product/product.model';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class CartService {
    cartProductList=[];
    constructor() {
    }

    getCartProductsList(): Array<Product>{
        return this.cartProductList;
    }
    pushCartProduct(item):Array<Product> {
        this.cartProductList.push(item);
        console.log(this.cartProductList, this.cartProductList.length);
        return this.cartProductList;
    }
}