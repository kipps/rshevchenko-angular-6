import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  product: Product = null;
  update:boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

  updateProduct(){
    this.update = true;
  }

  saveUpdates(){
    this.update = false;
  }

  removeFromCart(product):void {
    product.cartCount = product.cartCount - 1;
    product.count = product.count + 1;

  }

}
