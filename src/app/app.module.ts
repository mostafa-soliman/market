import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AngularFireModule  } from '@angular/fire/compat';
// in the past
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
// import {  } from '@angular/fire/firestore';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // AngularFireModule.initializeApp(
    //   {apiKey: "AIzaSyBEyNxVI8EyhhB7UreVskKoukP4iNO56N0",
    //   authDomain: "market-3eab3.firebaseapp.com",
    //   projectId: "market-3eab3",
    //   storageBucket: "market-3eab3.appspot.com",
    //   messagingSenderId: "980775821013",
    //   appId: "1:980775821013:web:9ca1b97c2305d183ff4c5c",
    //   measurementId: "G-SG1MDZKNT3"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
