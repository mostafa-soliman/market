import { Iitem } from './../interface/iitem';
import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { Icart } from '../interface/icart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Iitem[];
  x: number = 1;

  // cart:Icart;
  constructor(private itemsService: ItemsService) {
    let carts = this.getFromStorage();
    if (carts) {
      this.items = carts;
    } else {
      this.items = [];
    }
  }
  getTotalPrice(): number {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price;
      console.log('total Price : ' + item);
    }
    // this.sum += item.quantity * item.price;

    return sum;
  }

  // We sent the function to navbar to display the shopping cart

  totalQuantity(): number {
    this.addCartToStorage();
    let sumQ = 0;
    for (let item of this.items) {
      sumQ += item.quantity;
    }
    return sumQ;
  }




  addToCart(item: Iitem) {
    this.items.push(item);
    this.addCartToStorage();
  }
  // get data from home to cart
  getCartItems(): Iitem[] {
    return this.items;
  }

  // addToStorage(item:Iitem){
  //   // localStorage.setItem('items',item)
  // }

  addCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  getFromStorage() {
    let cartItems = JSON.parse(localStorage.getItem('cart')!);
    return cartItems;
  }
  removeItemFromStorage(item: Iitem) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.addCartToStorage();

  }

  clearStorage() {
    this.items = [];
    // localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  // item.quantity * item.price

  incrementQun(item: Iitem) {
    // localStorage.getItem(JSON.stringify(item.quantity=))
    // console.log('dddd' + localStorage.getItem(JSON.stringify(item.quantity)));
    // return item.quantity++;
    // item.quantity++;
    //  this.items.pop(item.quantity)
    // this.x=this.items.find(()=>item.quantity)
    // console.log(++item.quantity)
    // item.quantity++
    this.items = this.items.map((element) => {
      if (item.id === element.id) {
        element.quantity++;
      }
      return element;
    });
    this.addCartToStorage();
  }

  decrementQun(item: Iitem) {
    this.items = this.items.map((element) => {
      if (item.quantity > 1 && item.id === element.id) {
        element.quantity--;
      }
      return element;
    });
    // .filter((e) => e.quantity >= 1); //e delete any quantity =0
    this.addCartToStorage();
  }

  // totaly(item:Iitem){
  //  this.sum +=(item.price +item.quantity)
  // }
}
