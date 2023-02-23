import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatButtonModule
  ]
})
export class UserManagementModule { }
