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
  x: number = 1;
  sum: number = 0;

  constructor(
    private itemsService: ItemsService,
    private cartService: CartService
  ) {}
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
    // في خطأ في جلب المجموع الكلي
    for (let item of this.items) {
      this.sum += item.quantity * item.price;
    }

    // console.log('total Price : ' + this.sum);
    return(this.sum);
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
  }

  decrement(item: Iitem) {
    this.cartService.decrementQun(item);
    this.upDateCart();
  }
  upDateCart() {
    this.items = this.cartService.getCartItems();
  }

  ret(item: Iitem): number {
    return item.quantity * item.price;
  }
}
