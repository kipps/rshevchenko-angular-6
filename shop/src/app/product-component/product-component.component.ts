import {Component, OnInit} from '@angular/core';
import {Product}  from '../modules/product.module';

@Component({
    selector: 'app-product-component',
    templateUrl: './product-component.component.html',
    styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

    product: Product = {
        name: 'Test',
        description: 'A lot of words',
        price: 105,
        category: 1,
        isAvailable: true,
        tags: ['chart', 'point', 'test']
    };

    tags:any = this.product.tags;

    constructor() {
    }

    ngOnInit() {
    }

}
