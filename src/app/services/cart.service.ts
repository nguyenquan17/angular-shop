import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any = [];
  public productList = new BehaviorSubject<IProduct[]>([]);
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: IProduct[]) {
    this.cartList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: IProduct) {
    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotal();
    console.log(this.cartList);
  }
  getTotal(): number {
    let grandTotal = 0;
    this.cartList.map((product: IProduct) => {
      grandTotal += product.total;
    });
    return grandTotal;
  }
  removeCart(product: IProduct) {
    // this.cartList.map((id: number, index: number) => {
    //   if (product.productId === id) {
    //     this.cartList.splice(index, 1);
    //   }
    // });
    let index = this.cartList.indexOf(product);
    this.cartList.splice(index, 1);
    this.productList.next(this.cartList);
  }
  removeAllCart() {
    this.cartList = [];
    this.productList.next(this.cartList);
  }

  increaseItem(item: IProduct) {
    let index = this.cartList.indexOf(item);
    this.cartList.map((productQty: IProduct) => {
      if (productQty.productId === item.productId) {
        productQty[index] = productQty.quantity++;
        // total = this.getTotal() + productQty.total;
      }
    });
    console.log(index);
    this.productList.next(this.cartList);
  }
}
