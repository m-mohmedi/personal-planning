import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['test', Validators.required],
      password: ['test', Validators.required],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) this.router.navigateByUrl('dashboard');
  }

  connectWhitGoogleAccount() {
    this.authService.GoogleAuth();
  }

  signIn() {
    if (!this.formLogin.valid) return;

    this.authService.SignIn(
      this.formLogin.get('email')?.value,
      this.formLogin.get('password')?.value
    );
  }

  formErrors(element: string) {
    if (element == null) return;

    const error = Object.keys(this.formLogin.get(element)!.errors!)[0];

    switch (error) {
      case 'required':
        return 'This Field is required';
      default:
        return error;
        break;
    }

    return error;
  }
}
