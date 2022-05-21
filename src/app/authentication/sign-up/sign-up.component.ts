import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.required, Validators.max(16), Validators.min(6)],
      ],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) this.router.navigateByUrl('');
  }

  signUp() {
    this.authService.SignUp(
      this.formSignUp.get('email')?.value,
      this.formSignUp.get('password')?.value
    );
  }
}
