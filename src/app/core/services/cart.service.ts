import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { ICart } from 'src/app/shared/interfaces/ICart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ICart[] = [
    {
      id: 1,
      name: 'Product A',
      price: 200,
      quantity: 1,
      returnable: true,
    },
    {
      id: 2,
      name: 'Product B',
      price: 400,
      quantity: 1,
      returnable: false,
    },
  ];

  getCart() {
    return this.cart;
  }

  addToCart(cart: ICart) {
    this.cart.push(cart);
  }

  deleteCart(id: number) {
    var index = this.cart.findIndex((c) => c.id == id);
    if (index != null) {
      this.cart.splice(index, 1);
    }
  }

  increaseQuantity(id: number) {
    let index = this.cart.findIndex((c) => c.id == id);
    if (index != -1) {
      this.cart[index].quantity = this.cart[index].quantity + 1;
    }
  }

  decreaseQuantity(id: number) {
    let index = this.cart.findIndex((c) => c.id == id);
    if (index != -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity = this.cart[index].quantity - 1;
      }
    }
  }
}
