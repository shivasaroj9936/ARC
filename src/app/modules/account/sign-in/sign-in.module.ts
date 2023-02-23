import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SiginInComponent } from './sigin-in.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    SiginInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class SignInModule { }
