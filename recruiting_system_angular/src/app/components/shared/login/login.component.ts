import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  messageError: string = '';
  token: string = '';
  constructor(private loginService: LoginService, private router: Router) {}
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.]{6,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{8,}$/),
    ]),
  });
  // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),

  public get username() {
    return this.loginForm.controls.username;
  }
  public get password() {
    return this.loginForm.controls.password;
  }
  login(e: Event) {
    e.preventDefault();
    if (this.loginForm.status === 'VALID') {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.authorization);
          if (response.authorization == 'admin')
            this.router.navigate(['dashboard']);
        },
        error: (error) => {
          this.messageError = 'Invalid username or password. Please try again.';
        },
      });
    } else
      this.messageError = 'Invalid username or password. Please try again.';
  }
}
