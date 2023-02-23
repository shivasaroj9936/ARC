import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationManagementComponent } from './notification-management.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModuleModule } from 'src/app/shared-modules/shared-module/shared-module.module';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule,
    SharedModuleModule,
    FilterModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class NotificationManagementModule { }
