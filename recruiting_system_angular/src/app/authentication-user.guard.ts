import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationUserGuard {
  public condition: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.isUser) return true;
    this.router.navigate(['login']);
    return false;
  }
}
