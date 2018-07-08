import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product.model';
import {ProductService} from '../services/product.service';
import {CartService} from '../services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Array<Product>;
    boughtProduct: Array<Product>;

    constructor(public productService: ProductService, public cartService: CartService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    onBoughtProduct(product) {
        this.boughtProduct = this.cartService.pushCartProduct(product);
    }

}
