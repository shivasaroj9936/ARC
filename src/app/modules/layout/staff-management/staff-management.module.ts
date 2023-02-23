import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { AddNewStaffMemberComponent } from './add-new-staff-member/add-new-staff-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { SharedModuleModule } from 'src/app/shared-modules/shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    StaffManagementComponent,
    AddNewStaffMemberComponent
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    SharedModuleModule,
    FilterModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule, FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class StaffManagementModule { }
