import {Injectable} from '@angular/core';
import {Product} from '../product/product.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {
    constructor() {
    }

    getProduct(): Product {
        console.log('product service work');
        return new Product(1, 'Notulla', 245, 'It good stuff.', 12, true, 'RUS', false);
    }

    getProducts(): Array<Product>{
        console.log('product service work -- get all products');
        return [
            new Product(0, 'Polurssa', 100, '', 244, true, 'USA', false),
            new Product(1, 'Notulla', 245, 'It good stuff.', 12, true, 'RUS', false),
            new Product(2, 'Paracacula', 129, '', 234, false, 'BRA', false),
            new Product(3, 'Brasisslas', 112, 'Very good thing.', 340, true, 'UKR', false),
            new Product(4, 'Oyyalos', 12, 'It is paper with yellow lines.', 455, false, 'KAZ', false),
            new Product(5, 'Looks pada', 1278, '', 600, true, 'BEL', false)
        ];
    }
}