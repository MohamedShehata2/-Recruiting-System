import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  isLoading: boolean = false;

  reactiveForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    console.log('constructor callded');
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.reactiveForm.touched && this.reactiveForm.status === 'VALID') {
      this.isLoading = true;
      const userData = {
        ...this.reactiveForm.value,
        img: 'http://localhost/images/user.png',
      };

      this.authService.register(userData).subscribe({
        next: (res: any) => {
          if (res.message === 'created') {
            console.log(res);
            this.authService.loggedUser = { ...res.user };
            this.isLoading = false;
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
