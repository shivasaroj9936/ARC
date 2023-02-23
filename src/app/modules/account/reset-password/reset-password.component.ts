import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showPassword=true;
  showConfirmPassword=true;
  loginForm: any;
  spinner = false;
  errorType=!true;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.createFrom();
  }
  createFrom() {
    this.loginForm = this.fb.group({
      password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
      confirm_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
    },
    {
      validator: ConfirmedValidator('password', 'confirm_password')
    }
    )
  }
  onSubmit() {

  }

}
