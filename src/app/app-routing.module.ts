import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'admin' , component:GoodsComponent },
  {path:'cart' , component:CartComponent },
  {path:'account' , component:AccountComponent },
  {path:'navbar' , component:NavbarComponent },
  {path:'notfound' , component:NotFoundComponent },
  {path:'order' , component:OrderComponent },
  {path:'login' , component:LoginComponent },
  {path:'signup' , component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
