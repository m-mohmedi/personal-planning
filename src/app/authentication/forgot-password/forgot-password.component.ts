import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass'],
})
export class ForgotPasswordComponent implements OnInit {
  formForgotPassword: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.formForgotPassword = this.fb.group({
      email: ['email', [Validators.email, Validators.required]],
    });
  }
  ngOnInit() {}
  resetPassword() {
    if (!this.formForgotPassword.valid) return;
    this.authService.ForgotPassword(
      this.formForgotPassword.get('email')?.value
    );
  }
}
