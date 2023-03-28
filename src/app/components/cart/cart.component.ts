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
  total: number = 0;
  constructor(
    private itemsService: ItemsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.upDateCart();
  }

  // totalPrice(price:number , quantity:number){
  //   //  return item.price*quantity
  //   this.total += +quantity*price

  //  console.log(this.total);
  // }

  clearAllItem() {
    this.cartService.clearStorage()
    this.upDateCart();
  }

  removeItem(item:Iitem){
    this.cartService.removeItemFromStorage(item);
    this.upDateCart();
  }

  upDateCart(){
    this.items = this.cartService.getCartItems();
  }
}
