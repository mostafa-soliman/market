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
  totalPrice:number;
  constructor(
    private itemsService: ItemsService,
    private cartService: CartService
  ) {
    this.totalPrice=this.total();

  }
  ngOnInit(): void {

    this.upDateCart();
  }
  //    الدالة دي مبتظهرش الضرب بس اشتغلت بالطريقة العادية المهم هنا محتاج اعرف لو كنت عاوز استدعي الدالة دي اعمل ايه

  // استخدمة الدالة في الموصول للمجموع الكلي
  // totalPrice(item:Iitem){
  //  return item.price*quantity
  // this.total = quantity*price
  //  item.totalPrice! += item.quantity * item.price
  //  console.log(this.total);
  // }
  total():number {
  //  return this.cartService.getTotalPrice();
    // في خطأ في جلب المجموع الكلي
    this.upDateCart();

    let sum = 0;
    for (let item of this.items) {
          sum += item.price;

        }
      // this.sum += item.quantity * item.price;

        return(sum);
  }

  clearAllItem() {
    for (let item of this.items) {
      this.itemsService.isInCart(item);
      item.quantity = 1; //reseat of quantity in cart
    }
    this.cartService.clearStorage();
    this.upDateCart();
  }

  removeItem(item: Iitem) {
    this.cartService.removeItemFromStorage(item);
    this.itemsService.isInCart(item);
    this.upDateCart();
    item.quantity = 1; //reseat of quantity in cart
  }
  // الشغل ده هبد تمام
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
