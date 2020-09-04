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
      id: this.productService.getAllProducts().length + 2,
      name: this.cartProduct.name,
      quantity: 1,
      price: this.cartProduct.price,
      returnable: this.cartProduct.returnable,
    };
    this.cartService.addToCart(this.cart);
    this.router.navigate(['/cart']);
  }
}
