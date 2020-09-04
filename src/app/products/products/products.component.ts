import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { Router } from '@angular/router';
import { ICart } from 'src/app/shared/interfaces/ICart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  cartProduct: IProduct;
  cart: ICart;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    console.log(this.productService.getAllProducts());
    // this.productService.getAllProducts().subscribe((data) => {
    //   this.products = data;
    //   console.log(this.products);
    // });
    this.products = this.productService.getAllProducts();
    return this.products;
  }

  onView(id: number) {
    this.router.navigate(['product', id]);
  }

  addToCart(id: number) {
    this.cartProduct = this.productService.getProductDetail(id);
    this.cart = {
      id: this.products.length + 2,
      name: this.cartProduct.name,
      quantity: 1,
      price: this.cartProduct.price,
      returnable: this.cartProduct.returnable,
    };
    this.cartService.addToCart(this.cart);
    this.router.navigate(['cart']);
  }
}
