import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product: Product;
    @Output() boughtProduct:EventEmitter<Product> = new EventEmitter<Product>();
    constructor(
        public productService: ProductService
    ) {
    }

    ngOnInit() {
    }

    buy(product){
        product.status = true;
        this.boughtProduct.emit(product);
    }
}
