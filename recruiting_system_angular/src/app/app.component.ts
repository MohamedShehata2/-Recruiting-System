import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recruiting_system_angular';
  constructor(private loginService: LoginService, private router: Router) {}
  logout() {
    let confirmLogout = confirm('Are you sure you want to Logout?');
    if (confirmLogout) {
      this.loginService?.logout().subscribe({
        next: (response) => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.router?.navigate(['login']);
        },
        error: (error) => {
          this.router?.navigate(['login']);
        },
      });
    } else return;
  }
}
