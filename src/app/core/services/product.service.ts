import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    productsList: Array <Product> = [
        new Product(0, 'Polurssa', 100, '', 244, true, 'USA', './assets/img/p1.jpg', 5, 0),
        new Product(1, 'Notulla', 245, 'It good stuff.', 12, true, 'RUS', './assets/img/p2.jpg', 2, 0),
        new Product(2, 'Paracacula', 129, '', 234, true, 'BRA', './assets/img/p3.jpg', 2, 0),
        new Product(3, 'Brasisslas', 112, 'Very good thing.', 340, true, 'UKR', './assets/img/p4.jpg', 10, 0),
        new Product(4, 'Oyyalos', 12, 'You need it.', 455, false, 'KAZ', null, 0, 0),
        new Product(5, 'Looks pada', 1278, 'Oh, so nice!', 600, false, 'BEL', null, 0, 0)
    ];

    productsListCart: Array<Product> = [];

    constructor() {
    }

    getProduct(): Product {
        if (this.productsListCart) {
            return this.productsListCart[0];
        }
        return null;
    }

    getProducts(): Array<Product> {
        return this.productsList;
    }

    AddProduct(product): any {
        if(this.productsListCart.includes(product)){
            product.cartCount = product.cartCount + 1;
        }else {
            return this.productsListCart.push(product);
        }
    }

    removeProduct(product):any{
    }
}
