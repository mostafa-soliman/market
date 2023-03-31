import { Iitem } from './../interface/iitem';
import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Iitem[];
  x: number = 1;

  constructor(private itemsService: ItemsService) {
    let carts = this.getFromStorage();
    if (carts) {
      this.items = carts;
    } else {
      this.items = [];
    }
  }

  addToCart(item: Iitem) {
    this.items = this.items.map((element) => {
      if (item.id === element.id) {
        element.quantity++;
      }
      return element;
    });
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
  }
  clearStorage() {

    this.items = [];
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
    this.items = this.items
      .map((element) => {
        if (item.id === element.id) {
          element.quantity--;
        }
        if(element.quantity===0){
          this.itemsService.isInCart(element);
        }
        return element;
      })
      .filter((e) => e.quantity >= 1); //e delete any quantity =0
    this.addCartToStorage();
  }
}
