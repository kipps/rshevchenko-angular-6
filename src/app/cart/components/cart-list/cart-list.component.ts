import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

    products: Array<Product>;
    cost: number;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.productsListCart;
        this.cost = +this.getCost(this.products);
    }

    getCost(products) {
        let costArr:number = 0;
        products.forEach(function (item, i, products) {
            costArr = costArr + item.price;
        });
        return costArr;
    }
}
