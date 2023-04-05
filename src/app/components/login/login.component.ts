import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isUserLog: boolean = false;

  @ViewChild('loginForm') loginForm!: NgForm;
  // can you used this by #usernameInput , #passwordInput in i/p in html
  // @ViewChild('usernameInput') usernameInput!: ElementRef;
  // @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  Login(username: string, password: string) {
    this.userAuthService.login(username, password);
    this.isUserLog = this.userAuthService.isUserLogged;
    // this.router.navigate(['/']);
    this.loginForm.reset();
    // this.usernameInput.nativeElement.value = '';
    // this.passwordInput.nativeElement.value = '';
  }
}
