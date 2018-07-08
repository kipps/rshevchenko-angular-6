import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {Product} from './product/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    products: Array<Product>;
    basketProducts: Array<Product>=[];
    isShowList: boolean = false;

    constructor(public productService: ProductService, public cartService: CartService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
        this.basketProducts = this.cartService.getCartProductsList();
    }

    toggleBoughtList(){
        this.isShowList = !this.isShowList;
    }
}
