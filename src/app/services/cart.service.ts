import { Iitem } from './../interface/iitem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Iitem[]

  constructor() {
   let carts= this.getFromStorage()
    if (carts) {
      this.items=carts
    }else
    {
    this.items=[]
    }
    }

    addToCart(item:Iitem){

    this.items.push(item)
    this.addCartToStorage()
    }
    // get data from home to cart
    getCartItems():Iitem[]{
      return this.items
    }

    // addToStorage(item:Iitem){
    //   // localStorage.setItem('items',item)
    // }

    addCartToStorage(){
      localStorage.setItem('cart',JSON.stringify(this.items))
    }
    getFromStorage(){
      let cartItems=JSON.parse(localStorage.getItem('cart')!);
      return cartItems;
    }
    removeItemFromStorage(item:Iitem){
          this.items=this.items.filter(i=> i.id!==item.id)


    }
    clearStorage(){
      this.items=[]
      localStorage.setItem('cart',JSON.stringify(this.items))
    }

}

