import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthSignUpGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (this.userAuthService.isUserClickSignUp) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }  }
  }

