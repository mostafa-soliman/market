import { CartService } from './../../services/cart.service';
import { ItemsService } from './../../services/items.service';
import { Iitem } from './../../interface/iitem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // add: number = -1;
  items: Iitem[] = [];
  // itemsSearch: Iitem[] = [];
  // search: string = '';
  // searchTerm: string='';
  searchText:string='';
  isCollapsed = true;
  isCollapsedSort = true;





  constructor(
    private itemsService: ItemsService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.items =  this.itemsService.getAllItems();
    // this.itemsSearch = this.itemsService.getProducts();

  }

  // onSearchChanged(searchText: string) {
  //   this.searchText = searchText;
  // }

  // filterProducts(): any[] {
  //   if (!this.searchTerm) {
  //     return this.itemsSearch;
  //   }
  //   return this.itemsSearch.filter(itemsSearch =>
  //     itemsSearch.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }




  addToCart(item: Iitem) {
    this.cartService.addToCart(item);
    this.itemsService.isInCart(item);
  }

  // buy(quantity: any) {
  //   let selectedItem = this.items[this.add];
  //   let data = {
  //     name: selectedItem.name,
  //     quantity: +quantity,
  //     price: selectedItem.price,
  //   };
  //   console.log(data);
  //   this.add = -1;
  // }

  sortItems(srt:string){
    this.itemsService.sortItems(srt);
  }

}



