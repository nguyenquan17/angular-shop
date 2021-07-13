import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  product: IProduct[] = [];
  totalPrice: number;
  countItem: number;
  notifyError: boolean;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((products) => {
      this.product = products;
      this.totalPrice = this.cartService.getTotal();
      this.countItem = products.length;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return (this.notifyError = true);
    }
    this.notifyError = false;
  }
}
