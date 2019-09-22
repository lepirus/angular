import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {

    }
    else {
      this.authService.signUp(email, password).subscribe(
      resData => {
          console.log(resData);
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.error = 'An error ocurred!';
          this.isLoading = false;
        }
      );
    }

    authForm.reset();
  }
}
