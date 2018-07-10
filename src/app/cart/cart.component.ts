import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product.model';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  list: Array<Product>;
  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.list = this.cartService.getCartProductsList();
  }

}
