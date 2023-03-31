import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { itemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { index: 0 } },
  {
    path: 'cart',
    component: CartComponent,
    data: { index: 1 },
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    component: itemsComponent,
    data: { index: 2 },
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent, data: { index: 3 } },
  { path: 'signup', component: SignupComponent, data: { index: 4 } },
  { path: 'order', component: OrderComponent, data: { index: 5 } },
  { path: 'account', component: AccountComponent, data: { index: 6 } },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
