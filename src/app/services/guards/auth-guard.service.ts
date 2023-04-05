import { UserAuthService } from './../user-auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // return new Promise((resolve) => {
    //aPI لسه محتاج تعمل تسجيل للدخول و حفظه في
    //app-rout لما تخلص ده هتروح ع ملف ال
    //canActivete:[AuthGuardService]   اكتب في اللروت اللي عاوز تعمل ليه جارد تكتب
    // });
    if (this.userAuthService.isUserLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
