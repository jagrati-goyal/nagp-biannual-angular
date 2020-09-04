import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { ICart } from 'src/app/shared/interfaces/ICart';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: ICart[];
  totalQuanity: number = 0;
  totalPrice: number = 0;
  cart: ICart;

  constructor(
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.cart = this.activatedRoute.snapshot.params.cart;
    // if (this.cart != null) {
    //   this.cartService.addToCart(this.cart);
    // }
    this.getAllCart();
  }

  getAllCart() {
    this.totalPrice = 0;
    this.totalQuanity = 0;
    this.cartItems = this.cartService.getCart();
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalQuanity = this.totalQuanity + this.cartItems[i].quantity;
      this.totalPrice =
        this.totalPrice + this.cartItems[i].price * this.cartItems[i].quantity;
    }
  }

  increaseQuantity(id: number) {
    this.cartService.increaseQuantity(id);
    this.getAllCart();
  }

  decreaseQuantity(id: number) {
    this.cartService.decreaseQuantity(id);
    this.getAllCart();
  }

  onDelete(id: number) {
    this.cartService.deleteCart(id);
    this.getAllCart();
  }
}
