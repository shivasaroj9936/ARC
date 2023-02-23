import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClintDetailsRoutingModule } from './clint-details-routing.module';
import { ClintDetailsComponent } from './clint-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModuleModule } from 'src/app/shared-modules/shared-module/shared-module.module';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClintDetailsComponent
  ],
  imports: [
    CommonModule,
    ClintDetailsRoutingModule,
    SharedModuleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatGridListModule,
    FileUploadModule,
    MatButtonModule
  ]

})
export class ClintDetailsModule { }
