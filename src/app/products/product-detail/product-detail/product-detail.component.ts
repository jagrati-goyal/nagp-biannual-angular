import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { ICart } from 'src/app/shared/interfaces/ICart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: IProduct;
  cartProduct: IProduct;
  cart: ICart;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    console.log(this.productId);
    this.product = this.productService.getProductDetail(this.productId);
  }

  addToCart(id: number) {
    this.cartProduct = this.productService.getProductDetail(id);
    this.cart = {
      id: 3,
      name: this.cartProduct.name,
      quantity: this.cartProduct.quantity,
      price: this.cartProduct.quantity,
      returnable: this.cartProduct.returnable,
    };
    this.cartService.addToCart(this.cart);
    this.router.navigate(['cart']);
    // this.router.navigate(['cart', this.cart]);
  }
}
