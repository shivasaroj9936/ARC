import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ClintManagementRoutingModule } from './clint-management-routing.module';
import { ClintManagementComponent } from './clint-management.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModuleModule } from 'src/app/shared-modules/shared-module/shared-module.module';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClintManagementComponent,
  ],
  imports: [
    CommonModule,
    ClintManagementRoutingModule,
    FilterModule,
    SharedModuleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule,

  ]
})
export class ClintManagementModule {
  constructor(){
    console.log('ClintManagementModule loaded');

  }
 }
