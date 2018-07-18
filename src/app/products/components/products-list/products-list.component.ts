import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';
@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    products: Array<Product>;
    boughtProduct: Array<Product>;

    constructor(public productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    addToCart(product): void {
        this.boughtProduct = this.productService.AddProduct(product);
    }
}
