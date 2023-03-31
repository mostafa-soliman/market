import { CartService } from './../../services/cart.service';
import { ItemsService } from './../../services/items.service';
import { Iitem } from './../../interface/iitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  add: number = -1;
  items: Iitem[] = [];


  constructor(
    private itemsService: ItemsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.items = this.itemsService.getAllItems();

  }



  addToCart(item: Iitem) {
    // this.add=+index

    this.cartService.addToCart(item);
    this.itemsService.isInCart(item);

    // this.cartService.addToCart(item);
  }

  buy(quantity: any) {
    let selectedItem = this.items[this.add];
    let data = {
      name: selectedItem.name,
      quantity: +quantity,
      price: selectedItem.price,
    };
    console.log(data);
    this.add = -1;
  }
}
