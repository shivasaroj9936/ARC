import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EaringingManagementRoutingModule } from './earinging-management-routing.module';
import { EaringingManagementComponent } from './earinging-management.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { SharedModuleModule } from 'src/app/shared-modules/shared-module/shared-module.module';


@NgModule({
  declarations: [
    EaringingManagementComponent
  ],
  imports: [
    CommonModule,
    EaringingManagementRoutingModule,
    SharedModuleModule,
    MatProgressSpinnerModule,
    FilterModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class EaringingManagementModule { }
