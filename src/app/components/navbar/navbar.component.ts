import { ItemsService } from 'src/app/services/items.service';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Iitem } from 'src/app/interface/iitem';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  isUserLog: boolean = false;
  items: Iitem[] = [];
  //  totalQuantity = new CartComponent().totalQuantity();

  constructor(
    private userAuthService: UserAuthService,
    private itemsService: ItemsService,
    private cartService: CartService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.userAuthService.getUserLog().subscribe((status) => {
      this.isUserLog = status;
    });
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  Logout() {
    //i need clear item in cart when logout
    // this.clearAllItem();
    this.userAuthService.logOut();
    this.isUserLog = this.userAuthService.isUserLogged;
    this.router.navigate(['/']);

  }

  Login(username: string, password: string) {
    this.userAuthService.login(username, password);
    this.isUserLog = this.userAuthService.isUserLogged;
  }
  //i need clear item in cart when logout

  //   clearAllItem() {

  //     for (let item of this.items) {
  //       this.itemsService.isInCart(item);
  //       item.quantity=1;  //reseat of quantity in cart
  //     }
  //     this.cartService.clearStorage();
  //     this.items = this.cartService.getCartItems();

  // }

  // We called the function from cart.ts
  get totalQuantity():number{
    return this.cartService.totalQuantity();
  }
}
