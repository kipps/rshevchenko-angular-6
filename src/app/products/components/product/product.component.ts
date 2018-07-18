import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../../core/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() product: Product;
    @Output() boughtProduct: EventEmitter<Product> = new EventEmitter<Product>();

    constructor() {
    }

    buy(product): void {
        if (product.count > 1) {
            product.count = product.count - 1;
        } else {
            product.isAvailable = false;
        }
        this.boughtProduct.emit(product);
    }

}
