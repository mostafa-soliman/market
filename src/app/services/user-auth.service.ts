import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService implements OnInit {
  private isLoggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  ngOnInit(): void {}

  login(userName: string, password: string) {
    let userToken = '123456789';
    localStorage.setItem('token', userToken);
    this.isLoggedSubject.next(true);
  }
  logOut() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);

  }
  getUserLog() {
    return this.isLoggedSubject.asObservable();
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
