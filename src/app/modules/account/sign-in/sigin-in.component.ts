import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-in',
  templateUrl: './sigin-in.component.html',
  styleUrls: ['./sigin-in.component.scss']
})
export class SiginInComponent implements OnInit {
  loginForm!: FormGroup;
  spinner = false;
  errorType=false;
  public showPassword: boolean = true;
  constructor(private fb: FormBuilder, private _router: Router) { }

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


  }
  forgetPassword() {
    this._router.navigate(['forget-password']);

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
