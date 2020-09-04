import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { ICart } from 'src/app/shared/interfaces/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: ICart[];
  totalQuanity: number = 2;
  totalPrice: number = 600;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getAllCart();
  }

  getAllCart() {
    this.cartItems = this.cartService.getCart();
    for (let i = 1; i < this.cartItems.length; i++) {
      // this.totalQuanity = this.totalQuanity + this.cartService[i].quantity;
      // this.totalPrice = this.totalPrice + this.cartItems[i].price;
    }
  }

  onDelete(id: number) {
    this.cartService.deleteCart(id);
  }
}
