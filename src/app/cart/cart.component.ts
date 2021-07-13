import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: IProduct[] = [];
  totalPrice: number;
  countItem: number;
  // idx = this.product.indexOf(this.product[])
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((products) => {
      this.product = products;
      this.totalPrice = this.cartService.getTotal();
      this.countItem = products.length;
    });
  }
  removeItem(item: IProduct) {
    this.cartService.removeCart(item);
    console.log(this.product);
  }
  removeAll() {
    this.cartService.removeAllCart();
  }

  increaseitem(item: IProduct) {
    this.cartService.increaseItem(item);
  }
}
