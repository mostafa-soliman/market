import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean=false
  isUserLog:boolean=false;
  constructor(private userAuthService:UserAuthService){

  }
  ngOnInit(): void {
    this.userAuthService.getUserLog().subscribe(status=>{
      this.isUserLog=status;
    })
  }

  toggleNavbar(){
     this.isOpen=!this.isOpen;
  }
  Logout() {
    this.userAuthService.logOut();
    this.isUserLog=this.userAuthService.isUserLogged;
  }

  Login(username:string,password:string){
    this.userAuthService.login(username,password);
    this.isUserLog=this.userAuthService.isUserLogged;


  }

}
