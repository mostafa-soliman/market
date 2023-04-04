import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLog: boolean = false;

  constructor(  private userAuthService: UserAuthService){}
  ngOnInit(): void {
  }
  Login(username: string, password: string) {
    this.userAuthService.login(username, password);
    this.isUserLog = this.userAuthService.isUserLogged;

  }
  // login(form:object){
  //   console.log(form)}
  }




