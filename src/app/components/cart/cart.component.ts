import { Iitem } from './../../interface/iitem';
import { CartService } from './../../services/cart.service';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Iitem[] = [];
  count: number = 1;
  x: number = 0;
  sum: number = 0;
  totalPrice: number;
  constructor(
    private itemsService: ItemsService,
    private cartService: CartService
  ) {
    this.totalPrice = this.total();
  }
  ngOnInit(): void {
    this.upDateCart();
  }


  total(): number {
    this.upDateCart();
    let sum = 0;
    for (let item of this.items) {
      sum += item.price* item.quantity;
    }
    return sum;
  }

  clearAllItem() {
    this.cartService.clearStorage();
    this.itemsService.removeAllItemForCart();
    this.upDateCart();
  }

  removeItem(item: Iitem) {
    this.cartService.removeItemFromStorage(item);
    this.itemsService.isInCart(item);
    this.upDateCart();
    item.quantity = 1; //reseat of quantity in cart
  }
  increment(item: Iitem) {
    this.cartService.incrementQun(item);
    this.upDateCart();
    this.total();
  }

  decrement(item: Iitem) {
    this.cartService.decrementQun(item);
    this.upDateCart();
    this.total();
  }
  upDateCart() {
    this.items = this.cartService.getCartItems();
  }

  ret(item: Iitem): number {
    return item.quantity * item.price;
  }
}
