import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  images = [
    { path: '../../../assets/banner162021.jpg' },
    { path: '../../../assets/30_Jun87cdcff393a9dd7d2521d2b6800b14aa.png' },
    { path: '../../../assets/Screenshot 2021-07-09 232938.png' },
    { path: '../../../assets/02_Julabd4dc8d8160da19e2b9b414c1f72e11.png' },
  ];

  public productList: IProduct[];
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  errorMessage = 'Error';
  ngOnInit(): void {
    // this.apiService.getProduct().subscribe({
    //   next: (products) => (this.productList = products),
    //   error: (err) => (this.errorMessage = err),
    // });
    this.apiService.getProduct().subscribe((res) => {
      this.productList = res;

      console.log(this.productList);
    });
  }
  addtocart(product: IProduct) {
    this.cartService.addtoCart(product);
  }
}
