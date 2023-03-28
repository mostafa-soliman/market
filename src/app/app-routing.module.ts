import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { itemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'' , component:HomeComponent ,data:{index:0} },
  {path:'admin' , component:itemsComponent ,data:{index:2} },
  {path:'cart' , component:CartComponent ,data:{index:1} },
  {path:'account' , component:AccountComponent ,data:{index:7} },
  {path:'navbar' , component:NavbarComponent ,data:{index:8} },
  {path:'notfound' , component:NotFoundComponent  },
  {path:'order' , component:OrderComponent ,data:{index:5} },
  {path:'login' , component:LoginComponent ,data:{index:3} },
  {path:'signup' , component:SignupComponent ,data:{index:4} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
