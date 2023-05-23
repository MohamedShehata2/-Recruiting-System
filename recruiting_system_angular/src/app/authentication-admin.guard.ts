import { LoginService } from './services/login.service';
import { Injectable, OnInit } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationAdminGuard {
  public condition: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.isAdmin) return true;
    this.router.navigate(['login']);
    return false;
  }
}
