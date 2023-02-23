import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  loginForm: any;
  spinner = false;
  errorType=!true;
  toReset=false;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.createFrom();
  }
  createFrom() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }
  onSubmit() {
    console.log('onnnnnnnnnnnn',this.toReset);

    this.toReset=true;
  }
  backToLogin(){
    this._router.navigate(['sign-in'])
  }
}
